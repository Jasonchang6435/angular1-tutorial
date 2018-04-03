 const express = require('express')
const { log } = require('../utils')
const router = express()
const bodyParser = require('body-parser')
const multer = require('multer')
const upload = multer({
    dest: 'uploads/',
})
// req.query.produceId
// req.body
// req.params.id


const fs = require('fs')

//
router.put('/devices/:id',(req,res) => {
    log("put /devices/:id", req.params.id)
    res.send('')
})

router.delete('/devices/:id',(req,res) => {
    log("delete /devices/:id", req.params.id)
    res.send('')
})

router.get('/deviceParamFields',(req,res) => {
    log("get deviceParamFields", req.query.type)
    let t = req.query.type
    if (t == 'machinePolishing') {
        let a = [
                    {
                        "deviceType": "manualThermoformming",
                        "paramField": "thickness",
                        "isNecessary": 1,
                        "paramFieldDesc": "牙模厚度"
                    },
                    {
                        "deviceType": "manualThermoformming",
                        "paramField": "signCode",
                        "isNecessary": 0,
                        "paramFieldDesc": "其他字段"
                    },
                ]
        res.send(a)
    } else {
        let a = [
                    {
                        "deviceType": "manualThermoformming",
                        "paramField": "thickness",
                        "isNecessary": 1,
                        "paramFieldDesc": "牙模厚度"
                    },
                ]
        res.send(a)
    }
})

router.post('/manualOperationRecords',(req,res) => {
    log("post /manualOperationRecords", req.body)
    let a = 'ok'
    res.send(a)
})

router.put('/qaRecords',(req,res) => {
    log('post /qaRecords', req.body)
    let r = res.status(204)
    r.send('ok')
})

router.get('/qaRecords',(req,res) => {
    log("get qaRecords", req.query.qaState,)
    let a = [
          {
            "testTime": "1521508947",
            "order": {
              "produce_id": "produce_id",
              "is_expedited": "0",
              "is_follow": "string",
              "produce_reason": "produce_reason",
              "is_double": "0",
              "model_type": "03",
              "appliance": "string",
              "produce_requirement": "string",
              "produce_remark": "string",
              "case_id": "case_id",
              "patient_name": "patient_name",
              "hospital_name": "string",
              "doctor_name": "string",
              "phase_name": "string",
              "ods_addr": "string",
              "instruction_addr": "string",
              "ddm_addr": "string",
              "scheme": "string",
              "products": "string",
              "languages": "string",
              "proportion": "string",
              "locale": "string",
              "correct_cnt": 0,
              "keep_cnt": 0,
              "attach_cnt": 0,
              "lower_attach_cnt": 0,
              "model_cnt": 0,
              "expire_date": "1517418061",
              "create_date": "string",
              "state": "string",
              "batchNo": "string",
              "items": [
                {
                  "produce_item_id": "string",
                  "produce_id": "string",
                  "produce_type": "string",
                  "products": "string",
                  "model_type": "string",
                  "thickness": "string",
                  "is_stage_retainer": "string",
                  "product_type": "string",
                  "cnt": 0,
                  "upper_jaw_step_begin": 0,
                  "upper_jaw_step_end": 0,
                  "upper_times": 0,
                  "lower_jaw_step_begin": 0,
                  "lower_jaw_step_end": 0,
                  "lower_times": 0
                }
              ]
            }
        },
          {
            "testTime": "1517418061",
            "order": {
              "produce_id": "produce_id",
              "is_expedited": "0",
              "is_follow": "string",
              "produce_reason": "produce_reason",
              "is_double": "1",
              "model_type": "03",
              "appliance": "string",
              "produce_requirement": "string",
              "produce_remark": "string",
              "case_id": "case_id",
              "patient_name": "patient_name",
              "hospital_name": "string",
              "doctor_name": "string",
              "phase_name": "string",
              "ods_addr": "string",
              "instruction_addr": "string",
              "ddm_addr": "string",
              "scheme": "string",
              "products": "string",
              "languages": "string",
              "proportion": "string",
              "locale": "string",
              "correct_cnt": 0,
              "keep_cnt": 0,
              "attach_cnt": 0,
              "lower_attach_cnt": 0,
              "model_cnt": 0,
              "expire_date": "1517418061",
              "create_date": "string",
              "state": "string",
              "batchNo": "string",
              "items": [
                {
                  "produce_item_id": "string",
                  "produce_id": "string",
                  "produce_type": "string",
                  "products": "string",
                  "model_type": "string",
                  "thickness": "string",
                  "is_stage_retainer": "string",
                  "product_type": "string",
                  "cnt": 0,
                  "upper_jaw_step_begin": 0,
                  "upper_jaw_step_end": 0,
                  "upper_times": 0,
                  "lower_jaw_step_begin": 0,
                  "lower_jaw_step_end": 0,
                  "lower_times": 0
                }
              ]
            }
        },
        ]
    res.send(a)
})

router.post('/qcRecords/print',(req,res) => {
    log('post /qcRecords/print', req.body)
    res.send('ok')
})

// router.put('/manualFixModels',(req,res) => {
//     log("put /manualFixModels", req.body)
//     let a = 'ok'
//     res.status(204)
//     res.send(a)
// })

router.get('/manualFixModels/history',(req,res) => {
    log("get /manualFixModels/history", req.query.markingFinishTimeStart, req.query.markingFinishTimeEnd, req.query.isOverShift)
    let a = [
      {
        "modelId": "modelId",
        "markingFinishTime": "markingFinishTime",
        "downloadTime": "downloadTime",
        "downloadUser": "downloadUser",
        "uploadTime": "uploadTime",
        "uploadUser": "uploadUser",
        "overShift": true
      }
    ]
    res.send(a)
})

router.put('/manualFixModels',(req,res) => {
    log("put /manualFixModels", req.body)
    let a = 'ok'
    res.status(204)
    res.send(a)
})

router.get('/manualFixModels',(req,res) => {
    log("get /manualFixModels")
    let a = {
      "total": 2,
      "data": [
        {
          "modelId": "mid1",
          "manualFixStl": "\\\\192.168.35.149\\share\\share_wx_dev\\模型处理v2\\设计\\C01000825768\\新病例阶段\\3D设计\\DC01000825768X01\\L_2_000013MT7.stl"
        },
        {
          "modelId": "mid2",
          "manualFixStl": "\\\\192.168.35.149\\share\\share_wx_dev\\模型处理v2\\设计\\C01000825768\\新病例阶段\\3D设计\\DC01000825768X01\\U_4_T_6666666.stl"
        },
      ]
    }
    res.send(a)
})

router.get('/getjson',(req,res) => {
    log("get /getjson?")
    let a = fs.readFileSync('a.json','utf-8');
    res.send(a)
})

router.post('/devices',(req,res) => {
    log('post /devices', req.body)
    res.send('ok')
})

router.get('/devices',(req,res) => {
    log("get /groups? manualThermoformming thermoformming", req.query.cardId, req.query.type)
    if (req.query.type == 'manualThermoformming') {
        var a = []
    } else {
        var a = [
              {
                    "deviceCode": "d1",
                    "deviceName": "手工打磨",
                    "deviceType": "manualThermoformming",
                    "createBy": "string",
                    "createTime": "string",
                    "updateBy": "string",
                    "updateTime": "string",
                    "isDeleted": 0,
                    "deviceParameters": [
                      {
                        "key": "signCode",
                        "value": "1"
                      },
                      {
                        "key": "thickness",
                        "value": "0.76"
                      },
                    ]
                },
                {
                  "deviceCode": "d2",
                  "deviceName": "手工打磨",
                  "deviceType": "manualThermoformming",
                  "createBy": "string",
                  "createTime": "string",
                  "updateBy": "string",
                  "updateTime": "string",
                  "isDeleted": 0,
                  "deviceParameters": [
                    {
                      "key": "signCode",
                      "value": "2"
                    },
                    {
                      "key": "thickness",
                      "value": "0.4"
                    },
                  ]
                }
            ]
    }

    res.send(a)
})

router.get('/groups',(req,res) => {
    log("get /groups?", req.query.containerId)
    let a = {
      "groupId": "getGroupID"
    }
    res.send(a)
})

router.put('/manualThermoformmings',(req,res) => {
    log("put /manualThermoformmings")
    res.send('ok')
    // if (req.body.containerId == '11') {
    //     res.send('ok')
    // } else {
    //     res.status(400)
    //     let a = {
    //       "errorCode": "put error code",
    //       "message": "put error message"
    //     }
    //     res.send(a)
    // }
})

router.put('/groups/:groupId',(req,res) => {
    log("put /groups/:groupId", req.params.groupId)
    let a = {
      "groupId": "postGroupID"
    }
    res.send(a)
})

router.post('/groups',(req,res) => {
    log("post /groups", req.body)
    let a = {
      "groupId": "postGroupID"
    }
    res.send(a)
})

router.get('/sublots/:sublotId', (req, res) => {
    log("get /sublots/:sublotId", req.params.sublotId)
    let a = {
      "sublotId": "string",
      "lotId": "string",
      "category": "卷材",
      "supplier": "string",
      "quantity": 0,
      "remainingQuantity": 24,
      "storageLocation": "string",
      "description": [
        {
          "key": "thickness",
          "value": 0.4
        }
      ],
      "createTime": "string",
      "createBy": "string"
    }
    res.send(a)
})

router.get('/aligners', (req, res) => {
    log("get /aligners?produceId=${produceId}", req.query.produceId)
    let a = [
        {
        	"alignerId": "2711",
        	"step": 1,
        	"jaw": "L",
        	"thickness": "string",
        	"material": "string",
        	"status": "string",
        	"produceType": "string",
        	"productType": "modelProcessing",
        	"remadeAligner": 0,
        	"oldAlignerId": "string"
        }, {
        	"alignerId": "2712",
        	"step": 1,
        	"jaw": "L",
        	"thickness": "string",
        	"material": "string",
        	"status": "string",
        	"produceType": "string",
        	"productType": "modelProcessing",
        	"remadeAligner": 0,
        	"oldAlignerId": "string"
        }, {
        	"alignerId": "2713",
        	"step": 1,
        	"jaw": "L",
        	"thickness": "string",
        	"material": "string",
        	"status": "string",
        	"produceType": "string",
        	"productType": "modelProcessing",
        	"remadeAligner": 0,
        	"oldAlignerId": "string"
        }, {
        	"alignerId": "2714",
        	"step": 1,
        	"jaw": "L",
        	"thickness": "string",
        	"material": "string",
        	"status": "string",
        	"produceType": "string",
        	"productType": "modelProcessing",
        	"remadeAligner": 0,
        	"oldAlignerId": "string"
        }
        ]
    // let a = []
    res.send(a)
})

router.get('/productionRecords/:id', (req, res) => {
    let a = {
    	"userId": "shihm",
    	"productionType": "modelProcessing",
    	"recordId": "174",
    	"groupId": "",
    	"deviceId": "",
    	"taskId": "55584",
    	"creationTime": "2018-02-11 09:43:34",
    	"description": [
            {
        		"value": "2",
        		"key": "inputContainerId"
        	}, {
        		"value": "3",
        		"key": "outputContainerId"
        	},
            {
               "value": "2018-03-16T13:59:45+08:00",
               "key": "startTime"
            }, {
               "value": "2018-03-16T14:00:22+08:00",
               "key": "endTime"
            },
            {
        		"value": "9",
        		"key": "cardId"
        	},
            {
        		"value": "www",
        		"key": "sublotId"
        	},
            {
        		"value": "356",
        		"key": "groupId"
        	},
            {
        		"value": "L1",
        		"key": "containerId"
        	},
            {
        		"value": "010E6250",
        		"key": "modelId"
        	},
            {
        		"value": "0AiLv",
        		"key": "alignerId"
        	},
            {
        		"value": "1",
        		"key": "qcResult"
        	},
            {
        		"value": "01",
        		"key": "defectiveTreatment"
        	},
            {
        		"value": "02",
        		"key": "defectiveType"
        	},
            {
        		"value": "vvdfv",
        		"key": "defectiveRemark"
        	},
            {
        		"value": "03",
        		"key": "defectiveType2"
        	},
            {
    		"value": "M20160616000149-2",
    		"key": "modelProcessId"
    	}, {
    		"value": "M20160616000149-2",
    		"key": "processBusinessKey"
    	}, {
    		"value": "55578",
    		"key": "processInstanceId"
    	}, {
    		"value": "55584",
    		"key": "taskId"
    	}, {
    		"value": "",
    		"key": "remark"
    	}, {
    		"value": "ModelProcessing",
    		"key": "taskCode"
    	}, {
    		"value": "0",
    		"key": "trimmingTag"
    	}, {
    		"value": "{\"executionPlan\":[{\"inputParameters\":[{\"value\":\"55584\",\"key\":\"refTaskId\"},{\"value\":\"C01000707262\",\"key\":\"caseId\"},{\"value\":\"Y测试0620-001\",\"key\":\"patientName\"},{\"value\":\"新病例阶段\",\"key\":\"phaseName\"},{\"value\":\"shihm\",\"key\":\"userCode\"},{\"value\":\"DC01000707262X01\",\"key\":\"scheme\"},{\"value\":\"[{\\\"name\\\":\\\"161751(1)(1)牙周双.ods\\\"},{\\\"name\\\":\\\"161751-160531.ddm\\\"},{\\\"name\\\":\\\"Task status.json\\\"},{\\\"name\\\":\\\"Y测试0620-001_2018-02-11_C01000707262_1-1.amf\\\"}]\",\"key\":\"localSchemeFileList\"},{\"value\":\"5004\",\"key\":\"taskTypeCode\"},{\"value\":\"模型处理\",\"key\":\"taskName\"},{\"value\":\"cds-local://{root}/C01000707262/新病例阶段/3D设计/DC01000707262X01/Y测试0620-001_2018-02-11_C01000707262_1-1.amf\",\"key\":\"src\"},{\"value\":\"cds://cds.sh-dev.eainc.com:8001/shidaits/rest/cds/case/C01000707262/phase/新病例阶段/upload?method=POST&type=VF&tag=VF&path=DC01000707262X01&contentType=application/octet-stream\",\"key\":\"dst\"}],\"taskPlanName\":\"上传*.amf\",\"service\":\"fileService\",\"method\":\"copy\"},{\"inputParameters\":[{\"value\":\"55584\",\"key\":\"refTaskId\"},{\"value\":\"C01000707262\",\"key\":\"caseId\"},{\"value\":\"Y测试0620-001\",\"key\":\"patientName\"},{\"value\":\"新病例阶段\",\"key\":\"phaseName\"},{\"value\":\"shihm\",\"key\":\"userCode\"},{\"value\":\"DC01000707262X01\",\"key\":\"scheme\"},{\"value\":\"[{\\\"name\\\":\\\"161751(1)(1)牙周双.ods\\\"},{\\\"name\\\":\\\"161751-160531.ddm\\\"},{\\\"name\\\":\\\"Task status.json\\\"},{\\\"name\\\":\\\"Y测试0620-001_2018-02-11_C01000707262_1-1.amf\\\"}]\",\"key\":\"localSchemeFileList\"},{\"value\":\"5004\",\"key\":\"taskTypeCode\"},{\"value\":\"模型处理\",\"key\":\"taskName\"},{\"value\":\"cds-local://{root}/C01000707262/新病例阶段/3D设计/DC01000707262X01/161751(1)(1)牙周双.ods\",\"key\":\"src\"},{\"value\":\"smb://192.168.35.149/share/share_wx_dev/模型处理v2/设计/C01000707262/新病例阶段/3D设计/DC01000707262X01/161751(1)(1)牙周双.ods\",\"key\":\"dst\"}],\"taskPlanName\":\"上传:161751(1)(1)牙周双.ods到文件服务器\",\"service\":\"fileService\",\"method\":\"copy\"},{\"inputParameters\":[{\"value\":\"55584\",\"key\":\"refTaskId\"},{\"value\":\"C01000707262\",\"key\":\"caseId\"},{\"value\":\"Y测试0620-001\",\"key\":\"patientName\"},{\"value\":\"新病例阶段\",\"key\":\"phaseName\"},{\"value\":\"shihm\",\"key\":\"userCode\"},{\"value\":\"DC01000707262X01\",\"key\":\"scheme\"},{\"value\":\"[{\\\"name\\\":\\\"161751(1)(1)牙周双.ods\\\"},{\\\"name\\\":\\\"161751-160531.ddm\\\"},{\\\"name\\\":\\\"Task status.json\\\"},{\\\"name\\\":\\\"Y测试0620-001_2018-02-11_C01000707262_1-1.amf\\\"}]\",\"key\":\"localSchemeFileList\"},{\"value\":\"5004\",\"key\":\"taskTypeCode\"},{\"value\":\"模型处理\",\"key\":\"taskName\"},{\"value\":\"cds-local://{root}/C01000707262/新病例阶段/3D设计/DC01000707262X01/161751-160531.ddm\",\"key\":\"src\"},{\"value\":\"smb://192.168.35.149/share/share_wx_dev/模型处理v2/设计/C01000707262/新病例阶段/3D设计/DC01000707262X01/161751-160531.ddm\",\"key\":\"dst\"}],\"taskPlanName\":\"上传:161751-160531.ddm到文件服务器\",\"service\":\"fileService\",\"method\":\"copy\"},{\"inputParameters\":[{\"value\":\"55584\",\"key\":\"refTaskId\"},{\"value\":\"C01000707262\",\"key\":\"caseId\"},{\"value\":\"Y测试0620-001\",\"key\":\"patientName\"},{\"value\":\"新病例阶段\",\"key\":\"phaseName\"},{\"value\":\"shihm\",\"key\":\"userCode\"},{\"value\":\"DC01000707262X01\",\"key\":\"scheme\"},{\"value\":\"[{\\\"name\\\":\\\"161751(1)(1)牙周双.ods\\\"},{\\\"name\\\":\\\"161751-160531.ddm\\\"},{\\\"name\\\":\\\"Task status.json\\\"},{\\\"name\\\":\\\"Y测试0620-001_2018-02-11_C01000707262_1-1.amf\\\"}]\",\"key\":\"localSchemeFileList\"},{\"value\":\"5004\",\"key\":\"taskTypeCode\"},{\"value\":\"模型处理\",\"key\":\"taskName\"},{\"value\":\"cds-local://{root}/C01000707262/新病例阶段/3D设计/DC01000707262X01/Y测试0620-001_2018-02-11_C01000707262_1-1.amf\",\"key\":\"src\"},{\"value\":\"smb://192.168.35.149/share/share_wx_dev/模型处理v2/设计/C01000707262/新病例阶段/3D设计/DC01000707262X01/Y测试0620-001_2018-02-11_C01000707262_1-1.amf\",\"key\":\"dst\"}],\"taskPlanName\":\"上传:Y测试0620-001_2018-02-11_C01000707262_1-1.amf到文件服务器\",\"service\":\"fileService\",\"method\":\"copy\"}],\"hasFollow\":false}",
    		"key": "taskServiceResponse"
    	}, {
    		"value": "true",
    		"key": "isOnline"
    	}, {
    		"value": "[{\"designModelId\":\"C01000823250-DC01000823250X02-1-L_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/L_1.stl\",\"jaw\":\"L\",\"processName\":\"positive model\",\"status\":\"0\",\"step\":\"1\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-1-L_3\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/L_1_T.stl\",\"jaw\":\"L\",\"processName\":\"positive model\",\"status\":\"0\",\"step\":\"1\",\"type\":\"3\"},{\"designModelId\":\"C01000823250-DC01000823250X02-1-U_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/U_1.stl\",\"jaw\":\"U\",\"processName\":\"positive model\",\"status\":\"0\",\"step\":\"1\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-1-U_3\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/U_1_T.stl\",\"jaw\":\"U\",\"processName\":\"positive model\",\"status\":\"0\",\"step\":\"1\",\"type\":\"3\"},{\"designModelId\":\"C01000823250-DC01000823250X02-10-U_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/U_10.stl\",\"jaw\":\"U\",\"processName\":\"positive model\",\"status\":\"0\",\"step\":\"10\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-11-U_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/U_11.stl\",\"jaw\":\"U\",\"processName\":\"positive model\",\"status\":\"0\",\"step\":\"11\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-12-U_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/U_12.stl\",\"jaw\":\"U\",\"processName\":\"positive model\",\"status\":\"0\",\"step\":\"12\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-13-U_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/U_13.stl\",\"jaw\":\"U\",\"processName\":\"positive model\",\"status\":\"0\",\"step\":\"13\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-14-U_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/U_14.stl\",\"jaw\":\"U\",\"processName\":\"positive model\",\"status\":\"0\",\"step\":\"14\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-15-L_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/L_15.stl\",\"jaw\":\"L\",\"processName\":\"positive model\",\"status\":\"0\",\"step\":\"15\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-15-U_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/U_15.stl\",\"jaw\":\"U\",\"processName\":\"positive model\",\"status\":\"0\",\"step\":\"15\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-16-L_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/L_16.stl\",\"jaw\":\"L\",\"processName\":\"positive model\",\"status\":\"0\",\"step\":\"16\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-16-U_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/U_16.stl\",\"jaw\":\"U\",\"processName\":\"positive model\",\"status\":\"0\",\"step\":\"16\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-17-L_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/L_17.stl\",\"jaw\":\"L\",\"processName\":\"positive model\",\"status\":\"0\",\"step\":\"17\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-17-U_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/U_17.stl\",\"jaw\":\"U\",\"processName\":\"positive model\",\"status\":\"0\",\"step\":\"17\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-18-L_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/L_18.stl\",\"jaw\":\"L\",\"processName\":\"positive model\",\"status\":\"0\",\"step\":\"18\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-18-U_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/U_18.stl\",\"jaw\":\"U\",\"processName\":\"positive model\",\"status\":\"0\",\"step\":\"18\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-19-L_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/L_19.stl\",\"jaw\":\"L\",\"processName\":\"positive model\",\"status\":\"0\",\"step\":\"19\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-19-U_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/U_19.stl\",\"jaw\":\"U\",\"processName\":\"positive model\",\"status\":\"0\",\"step\":\"19\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-2-U_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/U_2.stl\",\"jaw\":\"U\",\"processName\":\"positive model\",\"status\":\"0\",\"step\":\"2\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-20-L_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/L_20.stl\",\"jaw\":\"L\",\"processName\":\"positive model\",\"status\":\"0\",\"step\":\"20\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-20-U_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/U_20.stl\",\"jaw\":\"U\",\"processName\":\"positive model\",\"status\":\"0\",\"step\":\"20\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-3-U_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/U_3.stl\",\"jaw\":\"U\",\"processName\":\"positive model\",\"status\":\"0\",\"step\":\"3\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-4-U_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/U_4.stl\",\"jaw\":\"U\",\"processName\":\"positive model\",\"status\":\"0\",\"step\":\"4\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-5-U_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/U_5.stl\",\"jaw\":\"U\",\"processName\":\"positive model\",\"status\":\"0\",\"step\":\"5\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-6-U_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/U_6.stl\",\"jaw\":\"U\",\"processName\":\"positive model\",\"status\":\"0\",\"step\":\"6\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-7-U_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/U_7.stl\",\"jaw\":\"U\",\"processName\":\"positive model\",\"status\":\"0\",\"step\":\"7\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-8-U_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/U_8.stl\",\"jaw\":\"U\",\"processName\":\"positive model\",\"status\":\"0\",\"step\":\"8\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-9-U_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/U_9.stl\",\"jaw\":\"U\",\"processName\":\"positive model\",\"status\":\"0\",\"step\":\"9\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-1-L_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/mark_L_1.json\",\"jaw\":\"L\",\"processName\":\"laser mark\",\"status\":\"0\",\"step\":\"1\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-1-L_3\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/mark_L_1_T.json\",\"jaw\":\"L\",\"processName\":\"laser mark\",\"status\":\"0\",\"step\":\"1\",\"type\":\"3\"},{\"designModelId\":\"C01000823250-DC01000823250X02-1-U_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/mark_U_1.json\",\"jaw\":\"U\",\"processName\":\"laser mark\",\"status\":\"0\",\"step\":\"1\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-1-U_3\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/mark_U_1_T.json\",\"jaw\":\"U\",\"processName\":\"laser mark\",\"status\":\"0\",\"step\":\"1\",\"type\":\"3\"},{\"designModelId\":\"C01000823250-DC01000823250X02-10-U_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/mark_U_10.json\",\"jaw\":\"U\",\"processName\":\"laser mark\",\"status\":\"0\",\"step\":\"10\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-11-U_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/mark_U_11.json\",\"jaw\":\"U\",\"processName\":\"laser mark\",\"status\":\"0\",\"step\":\"11\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-12-U_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/mark_U_12.json\",\"jaw\":\"U\",\"processName\":\"laser mark\",\"status\":\"0\",\"step\":\"12\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-13-U_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/mark_U_13.json\",\"jaw\":\"U\",\"processName\":\"laser mark\",\"status\":\"0\",\"step\":\"13\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-14-U_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/mark_U_14.json\",\"jaw\":\"U\",\"processName\":\"laser mark\",\"status\":\"0\",\"step\":\"14\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-15-L_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/mark_L_15.json\",\"jaw\":\"L\",\"processName\":\"laser mark\",\"status\":\"0\",\"step\":\"15\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-15-U_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/mark_U_15.json\",\"jaw\":\"U\",\"processName\":\"laser mark\",\"status\":\"0\",\"step\":\"15\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-16-L_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/mark_L_16.json\",\"jaw\":\"L\",\"processName\":\"laser mark\",\"status\":\"0\",\"step\":\"16\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-16-U_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/mark_U_16.json\",\"jaw\":\"U\",\"processName\":\"laser mark\",\"status\":\"0\",\"step\":\"16\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-17-L_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/mark_L_17.json\",\"jaw\":\"L\",\"processName\":\"laser mark\",\"status\":\"0\",\"step\":\"17\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-17-U_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/mark_U_17.json\",\"jaw\":\"U\",\"processName\":\"laser mark\",\"status\":\"0\",\"step\":\"17\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-18-L_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/mark_L_18.json\",\"jaw\":\"L\",\"processName\":\"laser mark\",\"status\":\"0\",\"step\":\"18\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-18-U_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/mark_U_18.json\",\"jaw\":\"U\",\"processName\":\"laser mark\",\"status\":\"0\",\"step\":\"18\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-19-L_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/mark_L_19.json\",\"jaw\":\"L\",\"processName\":\"laser mark\",\"status\":\"0\",\"step\":\"19\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-19-U_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/mark_U_19.json\",\"jaw\":\"U\",\"processName\":\"laser mark\",\"status\":\"0\",\"step\":\"19\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-2-U_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/mark_U_2.json\",\"jaw\":\"U\",\"processName\":\"laser mark\",\"status\":\"0\",\"step\":\"2\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-20-L_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/mark_L_20.json\",\"jaw\":\"L\",\"processName\":\"laser mark\",\"status\":\"0\",\"step\":\"20\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-20-U_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/mark_U_20.json\",\"jaw\":\"U\",\"processName\":\"laser mark\",\"status\":\"0\",\"step\":\"20\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-3-U_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/mark_U_3.json\",\"jaw\":\"U\",\"processName\":\"laser mark\",\"status\":\"0\",\"step\":\"3\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-4-U_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/mark_U_4.json\",\"jaw\":\"U\",\"processName\":\"laser mark\",\"status\":\"0\",\"step\":\"4\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-5-U_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/mark_U_5.json\",\"jaw\":\"U\",\"processName\":\"laser mark\",\"status\":\"0\",\"step\":\"5\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-6-U_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/mark_U_6.json\",\"jaw\":\"U\",\"processName\":\"laser mark\",\"status\":\"0\",\"step\":\"6\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-7-U_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/mark_U_7.json\",\"jaw\":\"U\",\"processName\":\"laser mark\",\"status\":\"0\",\"step\":\"7\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-8-U_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/mark_U_8.json\",\"jaw\":\"U\",\"processName\":\"laser mark\",\"status\":\"0\",\"step\":\"8\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-9-U_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/mark_U_9.json\",\"jaw\":\"U\",\"processName\":\"laser mark\",\"status\":\"0\",\"step\":\"9\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-1-L_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/trimline_L_1.json\",\"jaw\":\"L\",\"processName\":\"cutting profile\",\"status\":\"0\",\"step\":\"1\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-1-L_3\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/trimline_L_1_T.json\",\"jaw\":\"L\",\"processName\":\"cutting profile\",\"status\":\"0\",\"step\":\"1\",\"type\":\"3\"},{\"designModelId\":\"C01000823250-DC01000823250X02-1-U_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/trimline_U_1.json\",\"jaw\":\"U\",\"processName\":\"cutting profile\",\"status\":\"0\",\"step\":\"1\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-1-U_3\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/trimline_U_1_T.json\",\"jaw\":\"U\",\"processName\":\"cutting profile\",\"status\":\"0\",\"step\":\"1\",\"type\":\"3\"},{\"designModelId\":\"C01000823250-DC01000823250X02-10-U_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/trimline_U_10.json\",\"jaw\":\"U\",\"processName\":\"cutting profile\",\"status\":\"0\",\"step\":\"10\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-11-U_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/trimline_U_11.json\",\"jaw\":\"U\",\"processName\":\"cutting profile\",\"status\":\"0\",\"step\":\"11\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-12-U_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/trimline_U_12.json\",\"jaw\":\"U\",\"processName\":\"cutting profile\",\"status\":\"0\",\"step\":\"12\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-13-U_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/trimline_U_13.json\",\"jaw\":\"U\",\"processName\":\"cutting profile\",\"status\":\"0\",\"step\":\"13\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-14-U_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/trimline_U_14.json\",\"jaw\":\"U\",\"processName\":\"cutting profile\",\"status\":\"0\",\"step\":\"14\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-15-L_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/trimline_L_15.json\",\"jaw\":\"L\",\"processName\":\"cutting profile\",\"status\":\"0\",\"step\":\"15\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-15-U_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/trimline_U_15.json\",\"jaw\":\"U\",\"processName\":\"cutting profile\",\"status\":\"0\",\"step\":\"15\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-16-L_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/trimline_L_16.json\",\"jaw\":\"L\",\"processName\":\"cutting profile\",\"status\":\"0\",\"step\":\"16\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-16-U_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/trimline_U_16.json\",\"jaw\":\"U\",\"processName\":\"cutting profile\",\"status\":\"0\",\"step\":\"16\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-17-L_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/trimline_L_17.json\",\"jaw\":\"L\",\"processName\":\"cutting profile\",\"status\":\"0\",\"step\":\"17\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-17-U_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/trimline_U_17.json\",\"jaw\":\"U\",\"processName\":\"cutting profile\",\"status\":\"0\",\"step\":\"17\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-18-L_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/trimline_L_18.json\",\"jaw\":\"L\",\"processName\":\"cutting profile\",\"status\":\"0\",\"step\":\"18\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-18-U_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/trimline_U_18.json\",\"jaw\":\"U\",\"processName\":\"cutting profile\",\"status\":\"0\",\"step\":\"18\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-19-L_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/trimline_L_19.json\",\"jaw\":\"L\",\"processName\":\"cutting profile\",\"status\":\"0\",\"step\":\"19\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-19-U_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/trimline_U_19.json\",\"jaw\":\"U\",\"processName\":\"cutting profile\",\"status\":\"0\",\"step\":\"19\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-2-U_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/trimline_U_2.json\",\"jaw\":\"U\",\"processName\":\"cutting profile\",\"status\":\"0\",\"step\":\"2\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-20-L_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/trimline_L_20.json\",\"jaw\":\"L\",\"processName\":\"cutting profile\",\"status\":\"0\",\"step\":\"20\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-20-U_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/trimline_U_20.json\",\"jaw\":\"U\",\"processName\":\"cutting profile\",\"status\":\"0\",\"step\":\"20\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-3-U_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/trimline_U_3.json\",\"jaw\":\"U\",\"processName\":\"cutting profile\",\"status\":\"0\",\"step\":\"3\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-4-U_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/trimline_U_4.json\",\"jaw\":\"U\",\"processName\":\"cutting profile\",\"status\":\"0\",\"step\":\"4\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-5-U_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/trimline_U_5.json\",\"jaw\":\"U\",\"processName\":\"cutting profile\",\"status\":\"0\",\"step\":\"5\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-6-U_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/trimline_U_6.json\",\"jaw\":\"U\",\"processName\":\"cutting profile\",\"status\":\"0\",\"step\":\"6\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-7-U_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/trimline_U_7.json\",\"jaw\":\"U\",\"processName\":\"cutting profile\",\"status\":\"0\",\"step\":\"7\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-8-U_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/trimline_U_8.json\",\"jaw\":\"U\",\"processName\":\"cutting profile\",\"status\":\"0\",\"step\":\"8\",\"type\":\"1\"},{\"designModelId\":\"C01000823250-DC01000823250X02-9-U_1\",\"dst\":\"smb://192.168.35.149/share/share_wx_sit/模型处理v2/设计/C01000823250/新病例阶段/3D设计/DC01000823250X02/trimline_U_9.json\",\"jaw\":\"U\",\"processName\":\"cutting profile\",\"status\":\"0\",\"step\":\"9\",\"type\":\"1\"}]",
    		"key": "processInfos"
    	},
        ]
    }
    res.send(a)
})

router.get('/orders/:path/productionRecordShortcuts',(req,res) => {
    let a = [
        {
        	"productionType": "modelProcessing",
        	"recordId": "2714",
        	"step": 6,
        	"jaw": "U",
        	"produceType": "1",
        	"produceId": "M20171226000004",
        	"refId": "C01000823407-DC01000823407X02-6-U_1",
        	"creationTime": 1516675300000,
        	"id": 5908,
        	"type": "1"
        }, {
        	"productionType": "UVcuring",
        	"recordId": "1",
        	"step": 12,
        	"jaw": "U",
        	"produceType": "1",
        	"produceId": "M20171226000004",
        	"refId": "1",
        	"creationTime": 1516675300000,
        	"id": 5909,
        	"type": "1"
        }, {
        	"productionType": "UVcuring",
        	"recordId": "2",
        	"step": 11,
        	"jaw": "L",
        	"produceType": "1",
        	"produceId": "M20171226000004",
        	"refId": "2",
        	"creationTime": 1516675300000,
        	"id": 5910,
        	"type": "1"
        }, {
        	"productionType": "UVcuring",
        	"recordId": "2",
        	"step": 11,
        	"jaw": "L",
        	"produceType": "1",
        	"produceId": "M20171226000004",
        	"refId": "2",
        	"creationTime": 1516675300000,
        	"id": 5911,
        	"type": "1"
        }, {
        	"productionType": "UVcuring",
        	"recordId": "3",
        	"step": 9,
        	"jaw": "U",
        	"produceType": "1",
        	"produceId": "M20171226000004",
        	"refId": "3",
        	"creationTime": 1516675300000,
        	"id": 5952,
        	"type": "1"
        }, {
        	"productionType": "UVcuring",
        	"recordId": "4",
        	"step": 16,
        	"jaw": "U",
        	"produceType": "1",
        	"produceId": "M20171226000004",
        	"refId": "4",
        	"creationTime": 1516675300000,
        	"id": 5953,
        	"type": "1"
        }, {
        	"productionType": "UVcuring",
        	"recordId": "4",
        	"step": 16,
        	"jaw": "U",
        	"produceType": "1",
        	"produceId": "M20171226000004",
        	"refId": "4",
        	"creationTime": 1516675300000,
        	"id": 5953,
        	"type": "1"
        }, {
        	"productionType": "UVcuring",
        	"recordId": "5",
        	"step": 16,
        	"jaw": "U",
        	"produceType": "1",
        	"produceId": "M20171226000004",
        	"refId": "5",
        	"creationTime": 1516675300000,
        	"id": 5953,
        	"type": "1"
        }, {
        	"productionType": "manualReleased",
        	"recordId": "2711",
        	"step": 2,
        	"jaw": "U",
        	"produceType": "1",
        	"produceId": "M20171226000004",
        	"refId": "2711",
        	"creationTime": 1516675300000,
        	"id": 5909,
        	"type": "1"
        }, {
        	"productionType": "manualReleased",
        	"recordId": "2",
        	"step": 10,
        	"jaw": "L",
        	"produceType": "1",
        	"produceId": "M20171226000004",
        	"refId": "2712",
        	"creationTime": 1516675300000,
        	"id": 5910,
        	"type": "1"
        }, {
        	"productionType": "manualReleased",
        	"recordId": "3",
        	"step": 9,
        	"jaw": null,
        	"produceType": "1",
        	"produceId": "M20171226000004",
        	"refId": "2713",
        	"creationTime": 1516675300000,
        	"id": 5952,
        	"type": "1"
        }, {
        	"productionType": "manualReleased",
        	"recordId": "4",
        	"step": 16,
        	"jaw": "U",
        	"produceType": "1",
        	"produceId": "M20171226000004",
        	"refId": "2714",
        	"creationTime": 1516675300000,
        	"id": 5953,
        	"type": "1"
        }, {
        	"productionType": "manualReleased",
        	"recordId": "4",
        	"step": 5,
        	"jaw": "U",
        	"produceType": "1",
        	"produceId": "M20171226000004",
        	"refId": "4",
        	"creationTime": 1516675300000,
        	"id": 5953,
        	"type": "1"
        }, {
        	"productionType": "manualReleased",
        	"recordId": "5",
        	"step": 8,
        	"jaw": "U",
        	"produceType": "1",
        	"produceId": "M20171226000004",
        	"refId": "5",
        	"creationTime": 1516675300000,
        	"id": 5953,
        	"type": "1"
        },{
            "productionType": "UVcuringModelQC",
            "recordId": "4919",
            "step": 4,
            "jaw": "U",
            "produceType": "1",
            "produceId": "M20180301000023",
            "refId": "10F0477",
            "creationTime": 1519905776000,
            "id": 11243,
            "type": "2"
        },{
            "productionType": "UVcuringModelQC",
            "recordId": "5380",
            "step": 1,
            "jaw": "L",
            "produceType": "3",
            "produceId": "M20180301000023",
            "refId": "10F0420",
            "creationTime": 1519953963000,
            "id": 11721,
            "type": "2"
        },
        {
            "productionType": "UVcuringModelQC",
            "recordId": "5381",
            "step": 1,
            "jaw": "U",
            "produceType": "3",
            "produceId": "M20180301000023",
            "refId": "10F041C",
            "creationTime": 1519953977000,
            "id": 11722,
            "type": "2"
        },
        {
            "productionType": "UVcuringModelQC",
            "recordId": "5382",
            "step": 9,
            "jaw": "U",
            "produceType": "3",
            "produceId": "M20180301000023",
            "refId": "10F0439",
            "creationTime": 1519954610000,
            "id": 11723,
            "type": "2"
        },
        ]
    res.send(a)
})

router.post('/materialInQcs',(req,res) => {
    let a = 'post materialInQcs done'
    res.send(a)
})

router.post('/upload',upload.single('upfile'),(req,res) => {
    log('debug request file', req.file)
    let a = {
        filePath: 'upfile/success/location',
    }
    res.send(a)
})

// router.get('/lots',(req,res) => {
//     let a = [
//       {
//         "lotId": "lotId",
//         "materialCode": "materialCode",
//         "materialName": "materialName",
//         "category": "A",
//         "subCategory": "卷材",
//         "unit": "string",
//         "supplierProductBatchNo": "supplierProductBatchNo",
//         "supplier": "string",
//         "spec": "string",
//         "quantity": 123,
//         "remainsQuantity": 23,
//         "storageLocation": "string",
//         "status": "01"
//       }
//     ]
//     res.send(a)
// })

router.post('/userGroups',(req,res) => {
    log('post /userGroups', req.body)
    let a = 'ok'
    res.send(a)
})

router.delete('/userGroups/:id',(req,res) => {
    log('delete', req.params.id)
    let a = 'ok'
    res.send(a)
})

router.put('/userGroups/:id',(req,res) => {
    log('put /userGroups', req.body)
    let a = 'ok'
    res.send(a)
})

router.get('/userGroups',(req,res) => {
    let a = [
          {
            "groupId": "n1",
            "groupName": "rockers",
            "productionType": "machinePolishing",
            "groupUsers": [
                {
                    "userId": "j1",
                    "userName": "jerry"
                },
                {
                    "userId": "t1",
                    "userName": "tom"
                },
                {
                    "userId": "l1",
                    "userName": "李根吗"
                },
                {
                    "userId": "w1",
                    "userName": "王二小"
                },
                {
                    "userId": "h1",
                    "userName": "韩梅梅"
                },
                {
                    "userId": "h1",
                    "userName": "韩梅梅"
                },
                {
                    "userId": "h1",
                    "userName": "韩梅梅"
                },
                {
                    "userId": "h1",
                    "userName": "韩梅梅"
                },
                {
                    "userId": "h1",
                    "userName": "韩梅梅"
                },
            ]
        },{
          "groupId": "n2",
          "groupName": "rockers",
          "productionType": "machinePolishing",
          "groupUsers": [
              {
                  "userId": "j1",
                  "userName": "jsderry"
              },
              {
                  "userId": "t1",
                  "userName": "tosdm"
              },
              {
                  "userId": "l1",
                  "userName": "李根吗"
              },
              {
                  "userId": "w1",
                  "userName": "sd"
              },
              {
                  "userId": "h1",
                  "userName": "韩x梅梅"
              },
              {
                  "userId": "h1",
                  "userName": "dsd"
              },
              {
                  "userId": "h1",
                  "userName": "韩梅梅"
              },
              {
                  "userId": "h1",
                  "userName": "韩梅梅"
              },
              {
                  "userId": "h1",
                  "userName": "韩梅梅"
              },
          ]
        }
    ]
    res.send(a)
})

router.get('/items',(req,res) => {
    log("get /items", req.query.containerId)
    let a = [
          {
            "itemId": "1",
          },
          {
            "itemId": "2",
          },
    ]
    res.send(a)
})

router.get('/productionRecords',(req,res) => {
    let a = [
        {
            "userId": "shihm",
            "taskId": "string",
            "deviceid": "string",
            "productionType": "UVcuringStandardQCs",
            "description": [
                  {
                    "key": "modelId",
                    "value": "modelIdStandsd12"
                  },
                  {
                    "key": "qcResult",
                    "value": "0"
                  },
                  {
                    "key": "unqualifiedExplain",
                    "value": "bad bad bad"
                  },{
                    "key": "remadeReason",
                    "value": "remadeReasonsfg23你好刀龙季马斯带开麦;ascm CDKDLDL看毛;l213dsasd放过诺在哪882939UNNK-sadmasd"
                  }
            ]
        },{
            "userId": "shihm",
            "taskId": "string",
            "deviceid": "string",
            "productionType": "UVcuringModelQCs",
            "description": [
                {
                  "key": "modelId",
                  "value": "modelIdStandsd66666"
                },
                {
                  "key": "qcResult",
                  "value": "1"
                },
            ]
          }
    ]
    // let a = []
    res.send(a)
})

router.get('/models/:id',(req,res) => {
    log("get /models/:id", req.params.id)
    let a = {
            "modelId": "123",
            "step": 12,
            "jaw": "U",
            "alignerSpec": {
              "material": "TPU",
              "thickness": 0.4
            },
            "markPosition": "string",
            "trimmingLine": "string",
            "alignerId": "string",
            "caseIdAlias": "string",
            "produceType": "1+2+T+R",
            "deviceId": "deviceId123",
            "printBatch": "printBatchTG34",
            "order": {
            "produce_id": "string",
            "is_expedited": "string",
            "is_follow": "string",
            "produce_reason": "string",
            "is_double": "string",
            "model_type": "string",
            "appliance": "string",
            "produce_requirement": "string",
            "produce_remark": "string",
            "case_id": "case_id123",
            "patient_name": "patient_name123",
            "hospital_name": "string",
            "doctor_name": "string",
            "phase_name": "string",
            "ods_addr": "string",
            "instruction_addr": "string",
            "ddm_addr": "string",
            "scheme": "string",
            "products": "string",
            "languages": "string",
            "proportion": "string",
            "locale": "string",
            "correct_cnt": 0,
            "keep_cnt": 0,
            "attach_cnt": 0,
            "lower_attach_cnt": 0,
            "model_cnt": 0,
            "expire_date": "string",
            "create_date": "string",
            "state": "string",
            "items": [
              {
                "produce_item_id": "string",
                "produce_id": "string",
                "produce_type": "string",
                "products": "string",
                "model_type": "string",
                "thickness": "string",
                "is_stage_retainer": "string",
                "product_type": "string",
                "cnt": 0,
                "upper_jaw_step_begin": 0,
                "upper_jaw_step_end": 0,
                "upper_times": 0,
                "lower_jaw_step_begin": 0,
                "lower_jaw_step_end": 0,
                "lower_times": 0
              }
            ]
            },
            "productionRecord": {
            "userId": "string",
            "taskId": "string",
            "deviceid": "string",
            "productionType": "modelProcessing",
            "description": [],
            // [
            //   {
            //     "key": "remadeReason",
            //     "value": "remadeReasonsfg23你好刀龙季马斯带开麦;ascm CDKDLDL看毛;l213dsasd放过诺在哪882939"
            //   }
            // ]
            }
        }
    // setTimeout(function() {
        res.send(a)
    // }, 3000)
})

router.post('/remade',(req,res) => {
    // let a = 'ok'
    let a = {"message":"本次返工的L-1已经废弃或者转线下，无法再进行返工。或者尝试该病例最近的一次历史任务进行返工！"}
    res.status(400)
    res.send(a)
})

router.get('/userGroups/groupUsers',(req,res) => {
    if (req.query.userId == 'shihm' || req.query.productionType == '1' ) {
        let a = [
              {
                "userId": "zhengyan",
                "userName": "zy"
            },
              {
                "userId": "zhangsan",
                "userName": "zs"
            },
              {
                "userId": "lisi",
                "userName": "ls"
            },
        ]
        res.send(a)
    }
})

router.get('/orders',(req,res) => {
    let a = [
              {
                "produce_id": "123",
                "is_Expedited": "string",
                "is_Follow": "string",
                "produce_reason": "string",
                "is_double": "string",
                "model_type": "string",
                "appliance": "string",
                "produce_Requirement": "string",
                "produce_Remark": "string",
                "case_id": "case_id34",
                "patient_name": "name556",
                "hospital_name": "string",
                "doctor_Name": "string",
                "phase_name": "string",
                "ods_Addr": "string",
                "instruction_Addr": "string",
                "ddm_addr": "string",
                "scheme": "string",
                "products": "string",
                "languages": "string",
                "proportion": "string",
                "locale": "string",
                "correct_cnt": 0,
                "keep_cnt": 0,
                "attach_cnt": 0,
                "lower_attach_cnt": 0,
                "model_cnt": 0,
                "expire_Date": "string",
                "create_date": "string",
                "state": "string",
                "items": [
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
            },{
              "produce_id": "357",
              "is_Expedited": "string",
              "is_Follow": "string",
              "produce_reason": "string",
              "is_double": "string",
              "model_type": "string",
              "appliance": "string",
              "produce_Requirement": "string",
              "produce_Remark": "string",
              "case_id": "case_id2s",
              "patient_name": "name22",
              "hospital_name": "string",
              "doctor_Name": "string",
              "phase_name": "string",
              "ods_Addr": "string",
              "instruction_Addr": "string",
              "ddm_addr": "string",
              "scheme": "string",
              "products": "string",
              "languages": "string",
              "proportion": "string",
              "locale": "string",
              "correct_cnt": 0,
              "keep_cnt": 0,
              "attach_cnt": 0,
              "lower_attach_cnt": 0,
              "model_cnt": 0,
              "expire_Date": "string",
              "create_date": "string",
              "state": "string",
              "items": [
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
          },
        ]
    res.send(a)
})

router.get('/onlineModels',(req,res) => {
    // let a =  {
    //       "produce_id": "123",
    //       "is_Expedited": "string",
    //       "is_Follow": "string",
    //       "produce_reason": "string",
    //       "is_double": "string",
    //       "model_type": "02",
    //       "appliance": "string",
    //       "produce_Requirement": "string",
    //       "produce_Remark": "string",
    //       "case_id": "cds",
    //       "patient_name": "vhsj",
    //       "hospital_name": "string",
    //       "doctor_Name": "string",
    //       "phase_name": "gameover",
    //       "ods_Addr": "string",
    //       "instruction_Addr": "string",
    //       "ddm_addr": "string",
    //       "scheme": "encode",
    //       "products": "string",
    //       "languages": "string",
    //       "proportion": "string",
    //       "locale": "string",
    //       "correct_cnt": 0,
    //       "keep_cnt": 0,
    //       "attach_cnt": 0,
    //       "lower_attach_cnt": 0,
    //       "model_cnt": 0,
    //       "expire_Date": "string",
    //       "create_date": "string",
    //       "state": "string",
    //       "items": [
    //         {
    //           "produce_item_Id": "string",
    //           "produce_Id": "string",
    //           "produce_type": "01",
    //           "products": "string",
    //           "model_type": "string",
    //           "thickness": "string",
    //           "is_stage_retainer": "string",
    //           "product_type": "string",
    //           "cnt": 0,
    //           "upper_Jaw_Step_Begin": 0,
    //           "upper_Jaw_Step_End": 0,
    //           "upper_times": 0,
    //           "lower_Jaw_Step_Begin": 0,
    //           "lower_Jaw_Step_End": 0,
    //           "lower_times": 0
    //         }
    //       ],
    //       "models": [
    //                   {
    //                   "modelId": "6",
    //                   "orderId": "string",
    //                   "modelProcessId": "string",
    //                   "designModelId": "string",
    //                   "step": 12,
    //                   "jaw": "U",
    //                   "produceType": "1",
    //                   "stl": "",
    //                   "status": "LAYOUTING",
    //                   "modelIndex": 0,
    //                   "filmFormCount": 0,
    //                   "remadeModel": null,
    //                   "printTag": "3",
    //                   "offlineReason": 0
    //               }, {
    //                   "modelId": "2",
    //                   "orderId": "string",
    //                   "modelProcessId": "string",
    //                   "designModelId": "string",
    //                   "step": 11,
    //                   "jaw": "L",
    //                   "produceType": "1",
    //                   "stl": "string",
    //                   "status": "LAYOUTING",
    //                   "modelIndex": 0,
    //                   "filmFormCount": 0,
    //                   "remadeModel": null,
    //                   "printTag": "3",
    //                   "offlineReason": 0
    //               }, {
    //                   "modelId": "3",
    //                   "orderId": "string",
    //                   "modelProcessId": "string",
    //                   "designModelId": "string",
    //                   "step": 9,
    //                   "jaw": "U",
    //                   "produceType": "1",
    //                   "stl": null,
    //                   "status": "LAYOUTING",
    //                   "modelIndex": 0,
    //                   "filmFormCount": 0,
    //                   "remadeModel": null,
    //                   "printTag": "3",
    //                   "offlineReason": 0
    //               }, {
    //                   "modelId": "4",
    //                   "orderId": "string",
    //                   "modelProcessId": "string",
    //                   "designModelId": "string",
    //                   "step": 16,
    //                   "jaw": "U",
    //                   "produceType": "1",
    //                   "stl": null,
    //                   "status": "LAYOUTING",
    //                   "modelIndex": 0,
    //                   "filmFormCount": 0,
    //                   "remadeModel": null,
    //                   "printTag": "3",
    //                   "offlineReason": 0
    //               }, {
    //                   "modelId": "5",
    //                   "orderId": "string",
    //                   "modelProcessId": "string",
    //                   "designModelId": "string",
    //                   "step": 12,
    //                   "jaw": "U",
    //                   "produceType": "1",
    //                   "stl": null,
    //                   "status": "LAYOUTING",
    //                   "modelIndex": 0,
    //                   "filmFormCount": 0,
    //                   "remadeModel": null,
    //                   "printTag": "3",
    //                   "offlineReason": 0
    //               }
    //         ]
    //     }
    // a['produce_id'] = req.query.produceId
    // a['step'] = req.query.produceId
    let a = {"appliance":"全颌","proportion":"2","scheme":"DC01000829155X01","upperStep":"1-20,1/1,9/9,12/12","correct_cnt":40,"keep_cnt":0,"locale":"无锡","lower_attach_cnt":0,"ddm_addr":"http://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/498a8984-25ed-44c1-9739-309193178fb2/download","products":"普通矫治器,模板","produce_reason":"01","produce_requirement":"牙周病病例,矫治器边缘适当磨短,不要进入颊侧倒凹区\r\n\r\n","case_id":"C01000829155","patient_name":"测MES01","trimmingTag":0,"state":"01","create_date":1519898931000,"doctor_name":"林果果","is_expedited":"0","productType":["EABⅡ"],"attach_cnt":0,"hospital_name":"林果果机构","models":[],"batchNo":"18030100829155","is_follow":"1","lowerStep":"1-20,1/1","languages":"zh_CN","ods_addr":"http://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/2ed9ef26-f64d-4ed0-a4ca-9fb898fd1516/download","is_double":"0","cnt":44,"model_type":"03","produce_remark":"777\n444\n","produce_id":"M20180301000023","instruction_addr":"http://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/4552a1c9-bfe2-4867-9588-3552b004519f/download","expire_date":"2018-03-08","firstSend":true,"order_item":[{"lowerStep":"1-20","thickness":"0.76","upperStep":"1-20","cnt":40,"model_type":"03","upper_jaw_step_end":20,"upper_times":1,"is_stage_retainer":"0","produce_id":"M20180301000023","products":"普通矫治器","product_type":"EABⅡ","lower_jaw_step_begin":1,"lower_times":1,"produce_type":"1","lower_jaw_step_end":20,"upper_jaw_step_begin":1,"produce_item_Id":"M20180301000023-1"},{"lowerStep":"1/1","thickness":"0.4","upperStep":"1/1","cnt":2,"model_type":"03","upper_jaw_step_end":1,"upper_times":1,"is_stage_retainer":"0","produce_id":"M20180301000023","products":"模板","product_type":"EABⅡ","lower_jaw_step_begin":1,"lower_times":1,"produce_type":"3","lower_jaw_step_end":1,"upper_jaw_step_begin":1,"produce_item_Id":"M20180301000023-2"},{"lowerStep":"/","thickness":"0.4","upperStep":"9/9","cnt":1,"model_type":"03","upper_jaw_step_end":9,"upper_times":1,"is_stage_retainer":"0","produce_id":"M20180301000023","products":"模板","product_type":"EABⅡ","lower_jaw_step_begin":0,"lower_times":0,"produce_type":"3","lower_jaw_step_end":0,"upper_jaw_step_begin":9,"produce_item_Id":"M20180301000023-3"},{"lowerStep":"/","thickness":"0.4","upperStep":"12/12","cnt":1,"model_type":"03","upper_jaw_step_end":12,"upper_times":1,"is_stage_retainer":"0","produce_id":"M20180301000023","products":"模板","product_type":"EABⅡ","lower_jaw_step_begin":0,"lower_times":0,"produce_type":"3","lower_jaw_step_end":0,"upper_jaw_step_begin":12,"produce_item_Id":"M20180301000023-4"}],"phase_name":"新病例阶段","model_cnt":4}
    res.send(a)
})

router.get('/offlineModels',(req,res) => {
    var a = {"sort":null,"data":[{"modelId":"00026RRT7","designModelId":null,"modelProcessId":"M20160601000207-1","step":1,"jaw":"U","produceType":"1","filmFormCount":0,"stl":'httopsadjlka',"modelIndex":1,"remadeModel":null,"printTag":"3","offlineReason":0,"status":"INIT","order":{"produce_id":"M20160601000207","expire_date":"2016-06-08","patient_name":"吴爱娇","create_date":1464763500000,"is_expedited":"0","batchNo":"16060100699802","produce_requirement":"","produce_remark":"","case_id":"C01000699802","is_double":"0","doctor_name":"郭毅聪","hospital_name":"北京伊美尔爱康医院","cnt":30,"productionStatus":null,"languages":"zh_CN","is_follow":"1","ods_addr":"http://192.168.35.85:8001/shidaits/rest/cds/case/document/129eb8a1-33fe-47bf-8df6-d7fa0335a20b/download","ddm_addr":"","instruction_addr":"http://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/ccd34f9d-1f83-47e4-ac87-96b71b6b16f0/download","phase_name":"新病例阶段","attach_cnt":0,"lower_attach_cnt":0,"correct_cnt":30,"keep_cnt":0,"model_cnt":0,"appliance":"全颌","produce_reason":"01","model_type":"03","products":"普通矫治器","proportion":"2","locale":"无锡","state":"01","scheme":"DC01000699802X01"}},{"modelId":"00026T8T7","designModelId":null,"modelProcessId":"M20160601000207-1","step":2,"jaw":"U","produceType":"1","filmFormCount":0,"stl":'sadasd',"modelIndex":1,"remadeModel":null,"printTag":"3","offlineReason":0,"status":"INIT","order":{"produce_id":"M20160601000207","expire_date":"2016-06-08","patient_name":"吴爱娇","create_date":1464763500000,"is_expedited":"0","batchNo":"16060100699802","produce_requirement":"","produce_remark":"","case_id":"C01000699802","is_double":"0","doctor_name":"郭毅聪","hospital_name":"北京伊美尔爱康医院","cnt":30,"productionStatus":null,"languages":"zh_CN","is_follow":"1","ods_addr":"http://192.168.35.85:8001/shidaits/rest/cds/case/document/129eb8a1-33fe-47bf-8df6-d7fa0335a20b/download","ddm_addr":"","instruction_addr":"http://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/ccd34f9d-1f83-47e4-ac87-96b71b6b16f0/download","phase_name":"新病例阶段","attach_cnt":0,"lower_attach_cnt":0,"correct_cnt":30,"keep_cnt":0,"model_cnt":0,"appliance":"全颌","produce_reason":"01","model_type":"03","products":"普通矫治器","proportion":"2","locale":"无锡","state":"01","scheme":"DC01000699802X01"}},{"modelId":"00026UPT7","designModelId":null,"modelProcessId":"M20160601000207-1","step":3,"jaw":"U","produceType":"1","filmFormCount":0,"stl":'asdx',"modelIndex":1,"remadeModel":null,"printTag":"3","offlineReason":0,"status":"INIT","order":{"produce_id":"M20160601000207","expire_date":"2016-06-08","patient_name":"吴爱娇","create_date":1464763500000,"is_expedited":"0","batchNo":"16060100699802","produce_requirement":"","produce_remark":"","case_id":"C01000699802","is_double":"0","doctor_name":"郭毅聪","hospital_name":"北京伊美尔爱康医院","cnt":30,"productionStatus":null,"languages":"zh_CN","is_follow":"1","ods_addr":"http://192.168.35.85:8001/shidaits/rest/cds/case/document/129eb8a1-33fe-47bf-8df6-d7fa0335a20b/download","ddm_addr":"","instruction_addr":"http://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/ccd34f9d-1f83-47e4-ac87-96b71b6b16f0/download","phase_name":"新病例阶段","attach_cnt":0,"lower_attach_cnt":0,"correct_cnt":30,"keep_cnt":0,"model_cnt":0,"appliance":"全颌","produce_reason":"01","model_type":"03","products":"普通矫治器","proportion":"2","locale":"无锡","state":"01","scheme":"DC01000699802X01"}},{"modelId":"00026V7T7","designModelId":null,"modelProcessId":"M20160601000207-1","step":4,"jaw":"U","produceType":"1","filmFormCount":0,"stl":'asdxhttp',"modelIndex":1,"remadeModel":null,"printTag":"3","offlineReason":0,"status":"INIT","order":{"produce_id":"M20160601000207","expire_date":"2016-06-08","patient_name":"吴爱娇","create_date":1464763500000,"is_expedited":"0","batchNo":"16060100699802","produce_requirement":"","produce_remark":"","case_id":"C01000699802","is_double":"0","doctor_name":"郭毅聪","hospital_name":"北京伊美尔爱康医院","cnt":30,"productionStatus":null,"languages":"zh_CN","is_follow":"1","ods_addr":"http://192.168.35.85:8001/shidaits/rest/cds/case/document/129eb8a1-33fe-47bf-8df6-d7fa0335a20b/download","ddm_addr":"","instruction_addr":"http://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/ccd34f9d-1f83-47e4-ac87-96b71b6b16f0/download","phase_name":"新病例阶段","attach_cnt":0,"lower_attach_cnt":0,"correct_cnt":30,"keep_cnt":0,"model_cnt":0,"appliance":"全颌","produce_reason":"01","model_type":"03","products":"普通矫治器","proportion":"2","locale":"无锡","state":"01","scheme":"DC01000699802X01"}},{"modelId":"00026XNT7","designModelId":null,"modelProcessId":"M20160601000207-1","step":5,"jaw":"U","produceType":"1","filmFormCount":0,"stl":"\\\\192.168.35.149\\share\\share_wx_sit\\模型处理v2\\设计\\C01000820460\\新病例阶段\\3D设计\\DC01000820460X10\\U_1_1.stl","modelIndex":1,"remadeModel":null,"printTag":"3","offlineReason":0,"status":"INIT","order":{"produce_id":"M20160601000207","expire_date":"2016-06-08","patient_name":"吴爱娇","create_date":1464763500000,"is_expedited":"0","batchNo":"16060100699802","produce_requirement":"","produce_remark":"","case_id":"C01000699802","is_double":"0","doctor_name":"郭毅聪","hospital_name":"北京伊美尔爱康医院","cnt":30,"productionStatus":null,"languages":"zh_CN","is_follow":"1","ods_addr":"http://192.168.35.85:8001/shidaits/rest/cds/case/document/129eb8a1-33fe-47bf-8df6-d7fa0335a20b/download","ddm_addr":"","instruction_addr":"http://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/ccd34f9d-1f83-47e4-ac87-96b71b6b16f0/download","phase_name":"新病例阶段","attach_cnt":0,"lower_attach_cnt":0,"correct_cnt":30,"keep_cnt":0,"model_cnt":0,"appliance":"全颌","produce_reason":"01","model_type":"03","products":"普通矫治器","proportion":"2","locale":"无锡","state":"01","scheme":"DC01000699802X01"}},{"modelId":"00026Y6T7","designModelId":null,"modelProcessId":"M20160601000207-1","step":6,"jaw":"U","produceType":"1","filmFormCount":0,"stl":"\\\\192.168.35.149\\share\\share_wx_sit\\模型处理v2\\设计\\C01000823430\\新病例阶段\\3D设计\\DC01000823430X02\\U_1_T_1.stl","modelIndex":1,"remadeModel":null,"printTag":"3","offlineReason":0,"status":"INIT","order":{"produce_id":"M20160601000207","expire_date":"2016-06-08","patient_name":"吴爱娇","create_date":1464763500000,"is_expedited":"0","batchNo":"16060100699802","produce_requirement":"","produce_remark":"","case_id":"C01000699802","is_double":"0","doctor_name":"郭毅聪","hospital_name":"北京伊美尔爱康医院","cnt":30,"productionStatus":null,"languages":"zh_CN","is_follow":"1","ods_addr":"http://192.168.35.85:8001/shidaits/rest/cds/case/document/129eb8a1-33fe-47bf-8df6-d7fa0335a20b/download","ddm_addr":"","instruction_addr":"http://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/ccd34f9d-1f83-47e4-ac87-96b71b6b16f0/download","phase_name":"新病例阶段","attach_cnt":0,"lower_attach_cnt":0,"correct_cnt":30,"keep_cnt":0,"model_cnt":0,"appliance":"全颌","produce_reason":"01","model_type":"03","products":"普通矫治器","proportion":"2","locale":"无锡","state":"01","scheme":"DC01000699802X01"}},{"modelId":"000270XT7","designModelId":null,"modelProcessId":"M20160601000207-1","step":7,"jaw":"U","produceType":"1","filmFormCount":0,"stl":"\\\\192.168.35.149\\share\\share_wx_sit\\模型处理v2\\设计\\C01000823430\\新病例阶段\\3D设计\\DC01000823430X02\\L_1_T_1.stl","modelIndex":1,"remadeModel":null,"printTag":"3","offlineReason":0,"status":"INIT","order":{"produce_id":"M20160601000207","expire_date":"2016-06-08","patient_name":"吴爱娇","create_date":1464763500000,"is_expedited":"0","batchNo":"16060100699802","produce_requirement":"","produce_remark":"","case_id":"C01000699802","is_double":"0","doctor_name":"郭毅聪","hospital_name":"北京伊美尔爱康医院","cnt":30,"productionStatus":null,"languages":"zh_CN","is_follow":"1","ods_addr":"http://192.168.35.85:8001/shidaits/rest/cds/case/document/129eb8a1-33fe-47bf-8df6-d7fa0335a20b/download","ddm_addr":"","instruction_addr":"http://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/ccd34f9d-1f83-47e4-ac87-96b71b6b16f0/download","phase_name":"新病例阶段","attach_cnt":0,"lower_attach_cnt":0,"correct_cnt":30,"keep_cnt":0,"model_cnt":0,"appliance":"全颌","produce_reason":"01","model_type":"03","products":"普通矫治器","proportion":"2","locale":"无锡","state":"01","scheme":"DC01000699802X01"}},{"modelId":"000271DT7","designModelId":null,"modelProcessId":"M20160601000207-1","step":1,"jaw":"L","produceType":"1","filmFormCount":0,"stl":null,"modelIndex":1,"remadeModel":null,"printTag":"3","offlineReason":0,"status":"INIT","order":{"produce_id":"M20160601000207","expire_date":"2016-06-08","patient_name":"吴爱娇","create_date":1464763500000,"is_expedited":"0","batchNo":"16060100699802","produce_requirement":"","produce_remark":"","case_id":"C01000699802","is_double":"0","doctor_name":"郭毅聪","hospital_name":"北京伊美尔爱康医院","cnt":30,"productionStatus":null,"languages":"zh_CN","is_follow":"1","ods_addr":"http://192.168.35.85:8001/shidaits/rest/cds/case/document/129eb8a1-33fe-47bf-8df6-d7fa0335a20b/download","ddm_addr":"","instruction_addr":"http://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/ccd34f9d-1f83-47e4-ac87-96b71b6b16f0/download","phase_name":"新病例阶段","attach_cnt":0,"lower_attach_cnt":0,"correct_cnt":30,"keep_cnt":0,"model_cnt":0,"appliance":"全颌","produce_reason":"01","model_type":"03","products":"普通矫治器","proportion":"2","locale":"无锡","state":"01","scheme":"DC01000699802X01"}},{"modelId":"000272VT7","designModelId":null,"modelProcessId":"M20160601000207-1","step":2,"jaw":"L","produceType":"1","filmFormCount":0,"stl":null,"modelIndex":1,"remadeModel":null,"printTag":"3","offlineReason":0,"status":"INIT","order":{"produce_id":"M20160601000207","expire_date":"2016-06-08","patient_name":"吴爱娇","create_date":1464763500000,"is_expedited":"0","batchNo":"16060100699802","produce_requirement":"","produce_remark":"","case_id":"C01000699802","is_double":"0","doctor_name":"郭毅聪","hospital_name":"北京伊美尔爱康医院","cnt":30,"productionStatus":null,"languages":"zh_CN","is_follow":"1","ods_addr":"http://192.168.35.85:8001/shidaits/rest/cds/case/document/129eb8a1-33fe-47bf-8df6-d7fa0335a20b/download","ddm_addr":"","instruction_addr":"http://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/ccd34f9d-1f83-47e4-ac87-96b71b6b16f0/download","phase_name":"新病例阶段","attach_cnt":0,"lower_attach_cnt":0,"correct_cnt":30,"keep_cnt":0,"model_cnt":0,"appliance":"全颌","produce_reason":"01","model_type":"03","products":"普通矫治器","proportion":"2","locale":"无锡","state":"01","scheme":"DC01000699802X01"}},{"modelId":"000273BT7","designModelId":null,"modelProcessId":"M20160601000207-1","step":3,"jaw":"L","produceType":"1","filmFormCount":0,"stl":null,"modelIndex":1,"remadeModel":null,"printTag":"3","offlineReason":0,"status":"INIT","order":{"produce_id":"M20160601000207","expire_date":"2016-06-08","patient_name":"吴爱娇","create_date":1464763500000,"is_expedited":"0","batchNo":"16060100699802","produce_requirement":"","produce_remark":"","case_id":"C01000699802","is_double":"0","doctor_name":"郭毅聪","hospital_name":"北京伊美尔爱康医院","cnt":30,"productionStatus":null,"languages":"zh_CN","is_follow":"1","ods_addr":"http://192.168.35.85:8001/shidaits/rest/cds/case/document/129eb8a1-33fe-47bf-8df6-d7fa0335a20b/download","ddm_addr":"","instruction_addr":"http://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/ccd34f9d-1f83-47e4-ac87-96b71b6b16f0/download","phase_name":"新病例阶段","attach_cnt":0,"lower_attach_cnt":0,"correct_cnt":30,"keep_cnt":0,"model_cnt":0,"appliance":"全颌","produce_reason":"01","model_type":"03","products":"普通矫治器","proportion":"2","locale":"无锡","state":"01","scheme":"DC01000699802X01"}},{"modelId":"000274UT7","designModelId":null,"modelProcessId":"M20160601000207-1","step":4,"jaw":"L","produceType":"1","filmFormCount":0,"stl":null,"modelIndex":1,"remadeModel":null,"printTag":"3","offlineReason":0,"status":"INIT","order":{"produce_id":"M20160601000207","expire_date":"2016-06-08","patient_name":"吴爱娇","create_date":1464763500000,"is_expedited":"0","batchNo":"16060100699802","produce_requirement":"","produce_remark":"","case_id":"C01000699802","is_double":"0","doctor_name":"郭毅聪","hospital_name":"北京伊美尔爱康医院","cnt":30,"productionStatus":null,"languages":"zh_CN","is_follow":"1","ods_addr":"http://192.168.35.85:8001/shidaits/rest/cds/case/document/129eb8a1-33fe-47bf-8df6-d7fa0335a20b/download","ddm_addr":"","instruction_addr":"http://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/ccd34f9d-1f83-47e4-ac87-96b71b6b16f0/download","phase_name":"新病例阶段","attach_cnt":0,"lower_attach_cnt":0,"correct_cnt":30,"keep_cnt":0,"model_cnt":0,"appliance":"全颌","produce_reason":"01","model_type":"03","products":"普通矫治器","proportion":"2","locale":"无锡","state":"01","scheme":"DC01000699802X01"}},{"modelId":"000275AT7","designModelId":null,"modelProcessId":"M20160601000207-1","step":5,"jaw":"L","produceType":"1","filmFormCount":0,"stl":null,"modelIndex":1,"remadeModel":null,"printTag":"3","offlineReason":0,"status":"INIT","order":{"produce_id":"M20160601000207","expire_date":"2016-06-08","patient_name":"吴爱娇","create_date":1464763500000,"is_expedited":"0","batchNo":"16060100699802","produce_requirement":"","produce_remark":"","case_id":"C01000699802","is_double":"0","doctor_name":"郭毅聪","hospital_name":"北京伊美尔爱康医院","cnt":30,"productionStatus":null,"languages":"zh_CN","is_follow":"1","ods_addr":"http://192.168.35.85:8001/shidaits/rest/cds/case/document/129eb8a1-33fe-47bf-8df6-d7fa0335a20b/download","ddm_addr":"","instruction_addr":"http://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/ccd34f9d-1f83-47e4-ac87-96b71b6b16f0/download","phase_name":"新病例阶段","attach_cnt":0,"lower_attach_cnt":0,"correct_cnt":30,"keep_cnt":0,"model_cnt":0,"appliance":"全颌","produce_reason":"01","model_type":"03","products":"普通矫治器","proportion":"2","locale":"无锡","state":"01","scheme":"DC01000699802X01"}},{"modelId":"000276TT7","designModelId":null,"modelProcessId":"M20160601000207-1","step":6,"jaw":"L","produceType":"1","filmFormCount":0,"stl":null,"modelIndex":1,"remadeModel":null,"printTag":"3","offlineReason":0,"status":"INIT","order":{"produce_id":"M20160601000207","expire_date":"2016-06-08","patient_name":"吴爱娇","create_date":1464763500000,"is_expedited":"0","batchNo":"16060100699802","produce_requirement":"","produce_remark":"","case_id":"C01000699802","is_double":"0","doctor_name":"郭毅聪","hospital_name":"北京伊美尔爱康医院","cnt":30,"productionStatus":null,"languages":"zh_CN","is_follow":"1","ods_addr":"http://192.168.35.85:8001/shidaits/rest/cds/case/document/129eb8a1-33fe-47bf-8df6-d7fa0335a20b/download","ddm_addr":"","instruction_addr":"http://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/ccd34f9d-1f83-47e4-ac87-96b71b6b16f0/download","phase_name":"新病例阶段","attach_cnt":0,"lower_attach_cnt":0,"correct_cnt":30,"keep_cnt":0,"model_cnt":0,"appliance":"全颌","produce_reason":"01","model_type":"03","products":"普通矫治器","proportion":"2","locale":"无锡","state":"01","scheme":"DC01000699802X01"}},{"modelId":"0002779T7","designModelId":null,"modelProcessId":"M20160601000207-1","step":7,"jaw":"L","produceType":"1","filmFormCount":0,"stl":null,"modelIndex":1,"remadeModel":null,"printTag":"3","offlineReason":0,"status":"INIT","order":{"produce_id":"M20160601000207","expire_date":"2016-06-08","patient_name":"吴爱娇","create_date":1464763500000,"is_expedited":"0","batchNo":"16060100699802","produce_requirement":"","produce_remark":"","case_id":"C01000699802","is_double":"0","doctor_name":"郭毅聪","hospital_name":"北京伊美尔爱康医院","cnt":30,"productionStatus":null,"languages":"zh_CN","is_follow":"1","ods_addr":"http://192.168.35.85:8001/shidaits/rest/cds/case/document/129eb8a1-33fe-47bf-8df6-d7fa0335a20b/download","ddm_addr":"","instruction_addr":"http://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/ccd34f9d-1f83-47e4-ac87-96b71b6b16f0/download","phase_name":"新病例阶段","attach_cnt":0,"lower_attach_cnt":0,"correct_cnt":30,"keep_cnt":0,"model_cnt":0,"appliance":"全颌","produce_reason":"01","model_type":"03","products":"普通矫治器","proportion":"2","locale":"无锡","state":"01","scheme":"DC01000699802X01"}},{"modelId":"000278RT7","designModelId":null,"modelProcessId":"M20170905000001-1","step":1,"jaw":"U","produceType":"1","filmFormCount":0,"stl":null,"modelIndex":1,"remadeModel":null,"printTag":"3","offlineReason":0,"status":"INIT","order":{"produce_id":"M20170905000001","expire_date":"2017-09-12","patient_name":"测试流程11","create_date":1504595751000,"is_expedited":"0","batchNo":"17090500815598","produce_requirement":"","produce_remark":"777\n444\n","case_id":"C01000815598","is_double":"0","doctor_name":"林果果","hospital_name":"林果果机构","cnt":37,"productionStatus":null,"languages":"zh_CN","is_follow":"0","ods_addr":"http://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/a4d452f6-4dba-49ab-af2e-1e86123434e3/download","ddm_addr":"http://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/6f9b366b-7b92-4e8a-87f0-7bfbe86e8604/download","instruction_addr":"http://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/e77bf652-d2f3-4349-b6d0-27602cf386a1/download","phase_name":"新病例阶段","attach_cnt":0,"lower_attach_cnt":0,"correct_cnt":32,"keep_cnt":5,"model_cnt":0,"appliance":"全颌","produce_reason":"01","model_type":"03","products":"步差保持器,普通矫治器","proportion":"2","locale":"无锡","state":"01","scheme":"DC01000815598X02"}},{"modelId":"0002798T7","designModelId":null,"modelProcessId":"M20170905000001-1","step":2,"jaw":"U","produceType":"1","filmFormCount":0,"stl":null,"modelIndex":1,"remadeModel":null,"printTag":"3","offlineReason":0,"status":"INIT","order":{"produce_id":"M20170905000001","expire_date":"2017-09-12","patient_name":"测试流程11","create_date":1504595751000,"is_expedited":"0","batchNo":"17090500815598","produce_requirement":"","produce_remark":"777\n444\n","case_id":"C01000815598","is_double":"0","doctor_name":"林果果","hospital_name":"林果果机构","cnt":37,"productionStatus":null,"languages":"zh_CN","is_follow":"0","ods_addr":"http://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/a4d452f6-4dba-49ab-af2e-1e86123434e3/download","ddm_addr":"http://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/6f9b366b-7b92-4e8a-87f0-7bfbe86e8604/download","instruction_addr":"http://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/e77bf652-d2f3-4349-b6d0-27602cf386a1/download","phase_name":"新病例阶段","attach_cnt":0,"lower_attach_cnt":0,"correct_cnt":32,"keep_cnt":5,"model_cnt":0,"appliance":"全颌","produce_reason":"01","model_type":"03","products":"步差保持器,普通矫治器","proportion":"2","locale":"无锡","state":"01","scheme":"DC01000815598X02"}},{"modelId":"00027APT7","designModelId":null,"modelProcessId":"M20170905000001-1","step":3,"jaw":"U","produceType":"1","filmFormCount":0,"stl":null,"modelIndex":1,"remadeModel":null,"printTag":"3","offlineReason":0,"status":"INIT","order":{"produce_id":"M20170905000001","expire_date":"2017-09-12","patient_name":"测试流程11","create_date":1504595751000,"is_expedited":"0","batchNo":"17090500815598","produce_requirement":"","produce_remark":"777\n444\n","case_id":"C01000815598","is_double":"0","doctor_name":"林果果","hospital_name":"林果果机构","cnt":37,"productionStatus":null,"languages":"zh_CN","is_follow":"0","ods_addr":"http://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/a4d452f6-4dba-49ab-af2e-1e86123434e3/download","ddm_addr":"http://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/6f9b366b-7b92-4e8a-87f0-7bfbe86e8604/download","instruction_addr":"http://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/e77bf652-d2f3-4349-b6d0-27602cf386a1/download","phase_name":"新病例阶段","attach_cnt":0,"lower_attach_cnt":0,"correct_cnt":32,"keep_cnt":5,"model_cnt":0,"appliance":"全颌","produce_reason":"01","model_type":"03","products":"步差保持器,普通矫治器","proportion":"2","locale":"无锡","state":"01","scheme":"DC01000815598X02"}},{"modelId":"00027B7T7","designModelId":null,"modelProcessId":"M20170905000001-1","step":4,"jaw":"U","produceType":"1","filmFormCount":0,"stl":null,"modelIndex":1,"remadeModel":null,"printTag":"3","offlineReason":0,"status":"INIT","order":{"produce_id":"M20170905000001","expire_date":"2017-09-12","patient_name":"测试流程11","create_date":1504595751000,"is_expedited":"0","batchNo":"17090500815598","produce_requirement":"","produce_remark":"777\n444\n","case_id":"C01000815598","is_double":"0","doctor_name":"林果果","hospital_name":"林果果机构","cnt":37,"productionStatus":null,"languages":"zh_CN","is_follow":"0","ods_addr":"http://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/a4d452f6-4dba-49ab-af2e-1e86123434e3/download","ddm_addr":"http://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/6f9b366b-7b92-4e8a-87f0-7bfbe86e8604/download","instruction_addr":"http://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/e77bf652-d2f3-4349-b6d0-27602cf386a1/download","phase_name":"新病例阶段","attach_cnt":0,"lower_attach_cnt":0,"correct_cnt":32,"keep_cnt":5,"model_cnt":0,"appliance":"全颌","produce_reason":"01","model_type":"03","products":"步差保持器,普通矫治器","proportion":"2","locale":"无锡","state":"01","scheme":"DC01000815598X02"}},{"modelId":"00027DNT7","designModelId":null,"modelProcessId":"M20170905000001-1","step":5,"jaw":"U","produceType":"1","filmFormCount":0,"stl":null,"modelIndex":1,"remadeModel":null,"printTag":"3","offlineReason":0,"status":"INIT","order":{"produce_id":"M20170905000001","expire_date":"2017-09-12","patient_name":"测试流程11","create_date":1504595751000,"is_expedited":"0","batchNo":"17090500815598","produce_requirement":"","produce_remark":"777\n444\n","case_id":"C01000815598","is_double":"0","doctor_name":"林果果","hospital_name":"林果果机构","cnt":37,"productionStatus":null,"languages":"zh_CN","is_follow":"0","ods_addr":"http://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/a4d452f6-4dba-49ab-af2e-1e86123434e3/download","ddm_addr":"http://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/6f9b366b-7b92-4e8a-87f0-7bfbe86e8604/download","instruction_addr":"http://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/e77bf652-d2f3-4349-b6d0-27602cf386a1/download","phase_name":"新病例阶段","attach_cnt":0,"lower_attach_cnt":0,"correct_cnt":32,"keep_cnt":5,"model_cnt":0,"appliance":"全颌","produce_reason":"01","model_type":"03","products":"步差保持器,普通矫治器","proportion":"2","locale":"无锡","state":"01","scheme":"DC01000815598X02"}},{"modelId":"00027E6T7","designModelId":null,"modelProcessId":"M20170905000001-1","step":6,"jaw":"U","produceType":"1","filmFormCount":0,"stl":null,"modelIndex":1,"remadeModel":null,"printTag":"3","offlineReason":0,"status":"INIT","order":{"produce_id":"M20170905000001","expire_date":"2017-09-12","patient_name":"测试流程11","create_date":1504595751000,"is_expedited":"0","batchNo":"17090500815598","produce_requirement":"","produce_remark":"777\n444\n","case_id":"C01000815598","is_double":"0","doctor_name":"林果果","hospital_name":"林果果机构","cnt":37,"productionStatus":null,"languages":"zh_CN","is_follow":"0","ods_addr":"http://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/a4d452f6-4dba-49ab-af2e-1e86123434e3/download","ddm_addr":"http://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/6f9b366b-7b92-4e8a-87f0-7bfbe86e8604/download","instruction_addr":"http://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/e77bf652-d2f3-4349-b6d0-27602cf386a1/download","phase_name":"新病例阶段","attach_cnt":0,"lower_attach_cnt":0,"correct_cnt":32,"keep_cnt":5,"model_cnt":0,"appliance":"全颌","produce_reason":"01","model_type":"03","products":"步差保持器,普通矫治器","proportion":"2","locale":"无锡","state":"01","scheme":"DC01000815598X02"}},{"modelId":"00027FMT7","designModelId":null,"modelProcessId":"M20170905000001-1","step":7,"jaw":"U","produceType":"1","filmFormCount":0,"stl":null,"modelIndex":1,"remadeModel":null,"printTag":"3","offlineReason":0,"status":"INIT","order":{"produce_id":"M20170905000001","expire_date":"2017-09-12","patient_name":"测试流程11","create_date":1504595751000,"is_expedited":"0","batchNo":"17090500815598","produce_requirement":"","produce_remark":"777\n444\n","case_id":"C01000815598","is_double":"0","doctor_name":"林果果","hospital_name":"林果果机构","cnt":37,"productionStatus":null,"languages":"zh_CN","is_follow":"0","ods_addr":"http://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/a4d452f6-4dba-49ab-af2e-1e86123434e3/download","ddm_addr":"http://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/6f9b366b-7b92-4e8a-87f0-7bfbe86e8604/download","instruction_addr":"http://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/e77bf652-d2f3-4349-b6d0-27602cf386a1/download","phase_name":"新病例阶段","attach_cnt":0,"lower_attach_cnt":0,"correct_cnt":32,"keep_cnt":5,"model_cnt":0,"appliance":"全颌","produce_reason":"01","model_type":"03","products":"步差保持器,普通矫治器","proportion":"2","locale":"无锡","state":"01","scheme":"DC01000815598X02"}},{"modelId":"00027G5T7","designModelId":null,"modelProcessId":"M20170905000001-1","step":8,"jaw":"U","produceType":"1","filmFormCount":0,"stl":null,"modelIndex":1,"remadeModel":null,"printTag":"3","offlineReason":0,"status":"INIT","order":{"produce_id":"M20170905000001","expire_date":"2017-09-12","patient_name":"测试流程11","create_date":1504595751000,"is_expedited":"0","batchNo":"17090500815598","produce_requirement":"","produce_remark":"777\n444\n","case_id":"C01000815598","is_double":"0","doctor_name":"林果果","hospital_name":"林果果机构","cnt":37,"productionStatus":null,"languages":"zh_CN","is_follow":"0","ods_addr":"http://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/a4d452f6-4dba-49ab-af2e-1e86123434e3/download","ddm_addr":"http://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/6f9b366b-7b92-4e8a-87f0-7bfbe86e8604/download","instruction_addr":"http://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/e77bf652-d2f3-4349-b6d0-27602cf386a1/download","phase_name":"新病例阶段","attach_cnt":0,"lower_attach_cnt":0,"correct_cnt":32,"keep_cnt":5,"model_cnt":0,"appliance":"全颌","produce_reason":"01","model_type":"03","products":"步差保持器,普通矫治器","proportion":"2","locale":"无锡","state":"01","scheme":"DC01000815598X02"}},{"modelId":"00027HLT7","designModelId":null,"modelProcessId":"M20170905000001-1","step":9,"jaw":"U","produceType":"1","filmFormCount":0,"stl":null,"modelIndex":1,"remadeModel":null,"printTag":"3","offlineReason":0,"status":"INIT","order":{"produce_id":"M20170905000001","expire_date":"2017-09-12","patient_name":"测试流程11","create_date":1504595751000,"is_expedited":"0","batchNo":"17090500815598","produce_requirement":"","produce_remark":"777\n444\n","case_id":"C01000815598","is_double":"0","doctor_name":"林果果","hospital_name":"林果果机构","cnt":37,"productionStatus":null,"languages":"zh_CN","is_follow":"0","ods_addr":"http://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/a4d452f6-4dba-49ab-af2e-1e86123434e3/download","ddm_addr":"http://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/6f9b366b-7b92-4e8a-87f0-7bfbe86e8604/download","instruction_addr":"http://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/e77bf652-d2f3-4349-b6d0-27602cf386a1/download","phase_name":"新病例阶段","attach_cnt":0,"lower_attach_cnt":0,"correct_cnt":32,"keep_cnt":5,"model_cnt":0,"appliance":"全颌","produce_reason":"01","model_type":"03","products":"步差保持器,普通矫治器","proportion":"2","locale":"无锡","state":"01","scheme":"DC01000815598X02"}},{"modelId":"00027J4T7","designModelId":null,"modelProcessId":"M20170905000001-1","step":10,"jaw":"U","produceType":"1","filmFormCount":0,"stl":null,"modelIndex":1,"remadeModel":null,"printTag":"3","offlineReason":0,"status":"INIT","order":{"produce_id":"M20170905000001","expire_date":"2017-09-12","patient_name":"测试流程11","create_date":1504595751000,"is_expedited":"0","batchNo":"17090500815598","produce_requirement":"","produce_remark":"777\n444\n","case_id":"C01000815598","is_double":"0","doctor_name":"林果果","hospital_name":"林果果机构","cnt":37,"productionStatus":null,"languages":"zh_CN","is_follow":"0","ods_addr":"http://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/a4d452f6-4dba-49ab-af2e-1e86123434e3/download","ddm_addr":"http://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/6f9b366b-7b92-4e8a-87f0-7bfbe86e8604/download","instruction_addr":"http://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/e77bf652-d2f3-4349-b6d0-27602cf386a1/download","phase_name":"新病例阶段","attach_cnt":0,"lower_attach_cnt":0,"correct_cnt":32,"keep_cnt":5,"model_cnt":0,"appliance":"全颌","produce_reason":"01","model_type":"03","products":"步差保持器,普通矫治器","proportion":"2","locale":"无锡","state":"01","scheme":"DC01000815598X02"}},{"modelId":"00027KKT7","designModelId":null,"modelProcessId":"M20170905000001-1","step":11,"jaw":"U","produceType":"1","filmFormCount":0,"stl":null,"modelIndex":1,"remadeModel":null,"printTag":"3","offlineReason":0,"status":"INIT","order":{"produce_id":"M20170905000001","expire_date":"2017-09-12","patient_name":"测试流程11","create_date":1504595751000,"is_expedited":"0","batchNo":"17090500815598","produce_requirement":"","produce_remark":"777\n444\n","case_id":"C01000815598","is_double":"0","doctor_name":"林果果","hospital_name":"林果果机构","cnt":37,"productionStatus":null,"languages":"zh_CN","is_follow":"0","ods_addr":"http://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/a4d452f6-4dba-49ab-af2e-1e86123434e3/download","ddm_addr":"http://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/6f9b366b-7b92-4e8a-87f0-7bfbe86e8604/download","instruction_addr":"http://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/e77bf652-d2f3-4349-b6d0-27602cf386a1/download","phase_name":"新病例阶段","attach_cnt":0,"lower_attach_cnt":0,"correct_cnt":32,"keep_cnt":5,"model_cnt":0,"appliance":"全颌","produce_reason":"01","model_type":"03","products":"步差保持器,普通矫治器","proportion":"2","locale":"无锡","state":"01","scheme":"DC01000815598X02"}},{"modelId":"00027L3T7","designModelId":null,"modelProcessId":"M20170905000001-1","step":12,"jaw":"U","produceType":"1","filmFormCount":0,"stl":null,"modelIndex":1,"remadeModel":null,"printTag":"3","offlineReason":0,"status":"INIT","order":{"produce_id":"M20170905000001","expire_date":"2017-09-12","patient_name":"测试流程11","create_date":1504595751000,"is_expedited":"0","batchNo":"17090500815598","produce_requirement":"","produce_remark":"777\n444\n","case_id":"C01000815598","is_double":"0","doctor_name":"林果果","hospital_name":"林果果机构","cnt":37,"productionStatus":null,"languages":"zh_CN","is_follow":"0","ods_addr":"http://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/a4d452f6-4dba-49ab-af2e-1e86123434e3/download","ddm_addr":"http://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/6f9b366b-7b92-4e8a-87f0-7bfbe86e8604/download","instruction_addr":"http://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/e77bf652-d2f3-4349-b6d0-27602cf386a1/download","phase_name":"新病例阶段","attach_cnt":0,"lower_attach_cnt":0,"correct_cnt":32,"keep_cnt":5,"model_cnt":0,"appliance":"全颌","produce_reason":"01","model_type":"03","products":"步差保持器,普通矫治器","proportion":"2","locale":"无锡","state":"01","scheme":"DC01000815598X02"}},{"modelId":"00027MJT7","designModelId":null,"modelProcessId":"M20170905000001-1","step":13,"jaw":"U","produceType":"1","filmFormCount":0,"stl":null,"modelIndex":1,"remadeModel":null,"printTag":"3","offlineReason":0,"status":"INIT","order":{"produce_id":"M20170905000001","expire_date":"2017-09-12","patient_name":"测试流程11","create_date":1504595751000,"is_expedited":"0","batchNo":"17090500815598","produce_requirement":"","produce_remark":"777\n444\n","case_id":"C01000815598","is_double":"0","doctor_name":"林果果","hospital_name":"林果果机构","cnt":37,"productionStatus":null,"languages":"zh_CN","is_follow":"0","ods_addr":"http://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/a4d452f6-4dba-49ab-af2e-1e86123434e3/download","ddm_addr":"http://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/6f9b366b-7b92-4e8a-87f0-7bfbe86e8604/download","instruction_addr":"http://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/e77bf652-d2f3-4349-b6d0-27602cf386a1/download","phase_name":"新病例阶段","attach_cnt":0,"lower_attach_cnt":0,"correct_cnt":32,"keep_cnt":5,"model_cnt":0,"appliance":"全颌","produce_reason":"01","model_type":"03","products":"步差保持器,普通矫治器","proportion":"2","locale":"无锡","state":"01","scheme":"DC01000815598X02"}},{"modelId":"00027N2T7","designModelId":null,"modelProcessId":"M20170905000001-1","step":14,"jaw":"U","produceType":"1","filmFormCount":0,"stl":null,"modelIndex":1,"remadeModel":null,"printTag":"3","offlineReason":0,"status":"INIT","order":{"produce_id":"M20170905000001","expire_date":"2017-09-12","patient_name":"测试流程11","create_date":1504595751000,"is_expedited":"0","batchNo":"17090500815598","produce_requirement":"","produce_remark":"777\n444\n","case_id":"C01000815598","is_double":"0","doctor_name":"林果果","hospital_name":"林果果机构","cnt":37,"productionStatus":null,"languages":"zh_CN","is_follow":"0","ods_addr":"http://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/a4d452f6-4dba-49ab-af2e-1e86123434e3/download","ddm_addr":"http://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/6f9b366b-7b92-4e8a-87f0-7bfbe86e8604/download","instruction_addr":"http://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/e77bf652-d2f3-4349-b6d0-27602cf386a1/download","phase_name":"新病例阶段","attach_cnt":0,"lower_attach_cnt":0,"correct_cnt":32,"keep_cnt":5,"model_cnt":0,"appliance":"全颌","produce_reason":"01","model_type":"03","products":"步差保持器,普通矫治器","proportion":"2","locale":"无锡","state":"01","scheme":"DC01000815598X02"}},{"modelId":"00027PHT7","designModelId":null,"modelProcessId":"M20170905000001-1","step":15,"jaw":"U","produceType":"1","filmFormCount":0,"stl":null,"modelIndex":1,"remadeModel":null,"printTag":"3","offlineReason":0,"status":"INIT","order":{"produce_id":"M20170905000001","expire_date":"2017-09-12","patient_name":"测试流程11","create_date":1504595751000,"is_expedited":"0","batchNo":"17090500815598","produce_requirement":"","produce_remark":"777\n444\n","case_id":"C01000815598","is_double":"0","doctor_name":"林果果","hospital_name":"林果果机构","cnt":37,"productionStatus":null,"languages":"zh_CN","is_follow":"0","ods_addr":"http://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/a4d452f6-4dba-49ab-af2e-1e86123434e3/download","ddm_addr":"http://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/6f9b366b-7b92-4e8a-87f0-7bfbe86e8604/download","instruction_addr":"http://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/e77bf652-d2f3-4349-b6d0-27602cf386a1/download","phase_name":"新病例阶段","attach_cnt":0,"lower_attach_cnt":0,"correct_cnt":32,"keep_cnt":5,"model_cnt":0,"appliance":"全颌","produce_reason":"01","model_type":"03","products":"步差保持器,普通矫治器","proportion":"2","locale":"无锡","state":"01","scheme":"DC01000815598X02"}},{"modelId":"00027R1T7","designModelId":null,"modelProcessId":"M20170905000001-1","step":16,"jaw":"U","produceType":"1","filmFormCount":0,"stl":null,"modelIndex":1,"remadeModel":null,"printTag":"3","offlineReason":0,"status":"INIT","order":{"produce_id":"M20170905000001","expire_date":"2017-09-12","patient_name":"测试流程11","create_date":1504595751000,"is_expedited":"0","batchNo":"17090500815598","produce_requirement":"","produce_remark":"777\n444\n","case_id":"C01000815598","is_double":"0","doctor_name":"林果果","hospital_name":"林果果机构","cnt":37,"productionStatus":null,"languages":"zh_CN","is_follow":"0","ods_addr":"http://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/a4d452f6-4dba-49ab-af2e-1e86123434e3/download","ddm_addr":"http://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/6f9b366b-7b92-4e8a-87f0-7bfbe86e8604/download","instruction_addr":"http://cds.sh-sit.eainc.com:8001/shidaits/rest/cds/case/document/e77bf652-d2f3-4349-b6d0-27602cf386a1/download","phase_name":"新病例阶段","attach_cnt":0,"lower_attach_cnt":0,"correct_cnt":32,"keep_cnt":5,"model_cnt":0,"appliance":"全颌","produce_reason":"01","model_type":"03","products":"步差保持器,普通矫治器","proportion":"2","locale":"无锡","state":"01","scheme":"DC01000815598X02"}}],"total":260,"start":0,"order":null,"size":30}
    res.send(a)

})

// router.get('/models', (req,res) => {
//     let a = [
//   {
//     "modelId": "1",
//     "orderId": "2",
//     "modelProcessId": "3",
//     "designModelId": "4",
//     "step": 0,
//     "jaw": "U",
//     "produceType": "1",
//     "stl": "string",
//     "status": "string",
//     "modelIndex": 0,
//     "filmFormCount": 0,
//     "remadeModel": null
//   }
// ]
//     res.send(a)
// })

router.get('/aligners/:id', (req,res) => {
    let a = {
              "alignerId": "RPGHKu78",
              "order": {
                "produce_Id": "string",
                "is_Expedited": "string",
                "is_Follow": "string",
                "produce_reason": "string",
                "is_double": "string",
                "model_type": "string",
                "appliance": "string",
                "produce_requirement": "produce_requirementproduce_remark",
                "produce_remark": "produce_remarkproduce_remark",
                "case_id": "cds123445",
                "patient_name": "fucesss",
                "hospital_name": "diyihos",
                "doctor_Name": "string",
                "phase_name": "string",
                "ods_Addr": "string",
                "instruction_Addr": "string",
                "ddm_addr": "string",
                "scheme": "string",
                "products": "string",
                "languages": "string",
                "proportion": "string",
                "batchNo": "BatchNos1231",
                "locale": "string",
                "correct_cnt": 0,
                "keep_cnt": 0,
                "attach_cnt": 0,
                "lower_attach_cnt": 0,
                "model_cnt": 0,
                "expire_Date": "string",
                "create_date": "string",
                "state": "string",
                "items": [
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
              },
              "step": 7,
              "jaw": "U",
              "thickness": "string",
              "material": "string",
              "status": "string",
              "produceType": "1",
              "productType": "EAB",
              "remadeAligner": 0,
              "oldAlignerId": "string",
              "productionRecord": [
                {
                  "userId": "string",
                  "taskId": "string",
                  "deviceid": "string",
                  "productionType": "modelProcessing",
                  "description": [
                    {
                      "key": "defectiveTreatment",
                      "value": "defectiveTreatment"
                    },
                    {
                      "key": "defectiveType",
                      "value": "defectiveType"
                    },
                    {
                      "key": "defectiveRemark",
                      "value": "defectiveRemark"
                    },{
                      "key": "remadeReason",
                      "value": "remadeReasonsfg23你好刀龙季马斯带开麦;ascm CDKDLDL看毛;l213dsasd放过诺在哪882939UNNK-sadmasd"
                    }
                  ]
              },{
                    "userId": "string",
                    "taskId": "string",
                    "deviceid": "string",
                    "productionType": "modelProcessing",
                    "description": [
                      {
                        "key": "defectiveTreatment",
                        "value": "defect34"
                      },
                      {
                        "key": "defectiveType",
                        "value": "defect7889"
                      },
                      {
                        "key": "defectiveRemark",
                        "value": "defect9090"
                      },
                    ]
                },
              ]
            }
    if (req.query.produceId == '11111') {
        a.productionRecords = null
    }
    res.send(a)
})

router.post('/productionRecords', (req,res) => {
    // res.send('ok')
    let r = res.status(200)
    r.send({message:'订单号'})
})

router.post('/lotOperationRecords', (req,res) => {
    // setTimeout(function() {
    //     res.send('ok')
    // }, 5000)
    let a = {
        message: 'f*** error'
    }
    let r = res.status(401)
    r.send(a)
})

router.get('/lots', (req,res) => {
    let a = [{"quantity":500,"materialCode":"GJ-A-01","lotId":"1711290124","relatedLotId":"","remainsQuantity":489,"supplierProductBatchNo":"pihao","supplier":"SCHEU-DENTAL GmbH","materialName":null,"subCategory":null,"unit":null,"spec":null,"storageLocation":"AA","category":null}]
    res.send(a)
})

router.get('/lotOperationRecords', (req,res) => {
    let a = [[{"quantity":500,"materialCode":"GJ-C-01","lotId":"1711290124","relatedLotId":"","remainsQuantity":0,"supplierProductBatchNo":"pihao","supplier":"SCHEU-DENTAL GmbH","materialName":null,"subCategory":null,"unit":null,"spec":null,"storageLocation":"AA","category":null},{"recordId":102,"remark":"","operator":"时红梅","quantity":489,"checker":"","lotId":"1711290124","operationType":"OutStock4Sale","isCancelOperation":0,"isCanceled":0,"operationOrg":"2","accounter":"4","keeper":"4","voucherNo":"171204008","operationTime":"2017-12-04 16:08:51.0","canceledRecordId":null,"handler":"3"},{"materialCode":"GJ-C-01","subCategory2":null,"createBy":"Admin","materialName":"带刻度外卡规","subCategory":"工具","unit":"把","spec":"/","createTime":1510730859000,"category":"C"}],[{"quantity":500,"materialCode":"GJ-C-01","lotId":"1711290124","relatedLotId":"","remainsQuantity":0,"supplierProductBatchNo":"pihao","supplier":"SCHEU-DENTAL GmbH","materialName":null,"subCategory":null,"unit":null,"spec":null,"storageLocation":"AA","category":null},{"recordId":101,"remark":"12","operator":"时红梅","quantity":-489,"checker":"","lotId":"1711290124","operationType":"OutStock4Sale","isCancelOperation":1,"isCanceled":0,"operationOrg":"2","accounter":"4","keeper":"4","voucherNo":"171204007","operationTime":"2017-12-04 15:52:22.0","canceledRecordId":100,"handler":"3"},{"materialCode":"GJ-C-01","subCategory2":null,"createBy":"Admin","materialName":"带刻度外卡规","subCategory":"工具","unit":"把","spec":"/","createTime":1510730859000,"category":"C"}],[{"quantity":500,"materialCode":"GJ-C-01","lotId":"1711290124","relatedLotId":"","remainsQuantity":0,"supplierProductBatchNo":"pihao","supplier":"SCHEU-DENTAL GmbH","materialName":null,"subCategory":null,"unit":null,"spec":null,"storageLocation":"AA","category":null},{"recordId":100,"remark":"1","operator":"时红梅","quantity":489,"checker":"","lotId":"1711290124","operationType":"OutStock4Sale","isCancelOperation":0,"isCanceled":1,"operationOrg":"2","accounter":"4","keeper":"4","voucherNo":"171204006","operationTime":"2017-12-04 15:35:55.0","canceledRecordId":null,"handler":"3"},{"materialCode":"GJ-C-01","subCategory2":null,"createBy":"Admin","materialName":"带刻度外卡规","subCategory":"工具","unit":"把","spec":"/","createTime":1510730859000,"category":"C"}],[{"quantity":500,"materialCode":"GJ-C-01","lotId":"1711290124","relatedLotId":"","remainsQuantity":0,"supplierProductBatchNo":"pihao","supplier":"SCHEU-DENTAL GmbH","materialName":null,"subCategory":null,"unit":null,"spec":null,"storageLocation":"AA","category":null},{"recordId":99,"remark":"fz","operator":"时红梅","quantity":11,"checker":"","lotId":"1711290124","operationType":"OutStock4Prod","isCancelOperation":0,"isCanceled":0,"operationOrg":"挺好帮忙","accounter":"尽早","keeper":"不够","voucherNo":"171129012","operationTime":"2017-11-29 10:17:30.0","canceledRecordId":null,"handler":"提货人"},{"materialCode":"GJ-C-01","subCategory2":null,"createBy":"Admin","materialName":"带刻度外卡规","subCategory":"工具","unit":"把","spec":"/","createTime":1510730859000,"category":"C"}],[{"quantity":500,"materialCode":"GJ-C-01","lotId":"1711290124","relatedLotId":"","remainsQuantity":0,"supplierProductBatchNo":"pihao","supplier":"SCHEU-DENTAL GmbH","materialName":null,"subCategory":null,"unit":null,"spec":null,"storageLocation":"AA","category":null},{"recordId":98,"remark":"fz","operator":"时红梅","quantity":500,"checker":"ys","lotId":"1711290124","operationType":"InStock","isCancelOperation":0,"isCanceled":0,"operationOrg":"","accounter":"jz","keeper":"bg","voucherNo":"171129012","operationTime":"2017-11-29 10:15:23.0","canceledRecordId":null,"handler":"jsr"},{"materialCode":"GJ-C-01","subCategory2":null,"createBy":"Admin","materialName":"带刻度外卡规","subCategory":"工具","unit":"把","spec":"/","createTime":1510730859000,"category":"C"}],[{"quantity":2,"materialCode":"GJ-C-09","lotId":"1711290113","relatedLotId":"","remainsQuantity":0,"supplierProductBatchNo":"sdasd","supplier":"SCHEU-DENTAL GmbH","materialName":null,"subCategory":null,"unit":null,"spec":null,"storageLocation":"4","category":null},{"recordId":97,"remark":"2","operator":"时红梅","quantity":2,"checker":"","lotId":"1711290113","operationType":"OutStock4Prod","isCancelOperation":0,"isCanceled":0,"operationOrg":"3","accounter":"4","keeper":"4","voucherNo":"171129011","operationTime":"2017-11-29 09:45:03.0","canceledRecordId":null,"handler":"4"},{"materialCode":"GJ-C-09","subCategory2":null,"createBy":"Admin","materialName":"手术刀柄 3＃","subCategory":"工具","unit":"把","spec":" 3＃","createTime":1510730859000,"category":"C"}],[{"quantity":2,"materialCode":"GJ-C-09","lotId":"1711290113","relatedLotId":"","remainsQuantity":0,"supplierProductBatchNo":"sdasd","supplier":"SCHEU-DENTAL GmbH","materialName":null,"subCategory":null,"unit":null,"spec":null,"storageLocation":"4","category":null},{"recordId":96,"remark":"mark","operator":"时红梅","quantity":2,"checker":"3","lotId":"1711290113","operationType":"InStock","isCancelOperation":0,"isCanceled":0,"operationOrg":"","accounter":"1","keeper":"2","voucherNo":"171129011","operationTime":"2017-11-29 09:43:18.0","canceledRecordId":null,"handler":"3"},{"materialCode":"GJ-C-09","subCategory2":null,"createBy":"Admin","materialName":"手术刀柄 3＃","subCategory":"工具","unit":"把","spec":" 3＃","createTime":1510730859000,"category":"C"}]]
    res.send(a)
})







module.exports = router
