'use strict';
app.controller('homeCtrl',['$scope','$http','getTaskList',function($scope,$http,getTaskList){
	//$http.defaults.headers.common['Authorization'] = 'Basic ' + Base64.encode('kermit' + ':' +'kermit');
	// 按照 angular resource 的用法
	//获取列表
	$scope.getTasks =function(){
        //  get 的用法
		getTaskList.getList().get(function(suc){
			$scope.tasklist = suc.data;
		},function(err){
			console.log(err.status+"抱歉，获取列表失败！");
		});
	}
	// $scope.getTasks();
	//获取订单详情
	$scope.getlistinfo = function(task){
		getTaskList.getTask().get({"taskid":task},function(datas){
			$scope.caseid = datas.id;
			$scope.casekey = datas.taskDefinitionKey;
			$scope.casename = datas.name;

		});
	}



	var item = {
		"processDefinitionId":"helloWorldProcess:1:2504",
		"businessKey":"122",
		"variables": [
		    {
		        "name":"myVar",
		        "value":"This is a variable"
		    }
		]
	}
	// 创建订单
	$scope.createTask = function(){
		//  post 的用法
		getTaskList.postTask(item).save(item,function(suc){
			$scope.getTasks();
		},function(err){
			console.log(err.status);
		});
	}

	// put 的用法
	$scope.putTask = function (item,selector,stateName) {
		getTaskList.putTask().update(
			{ "taskid": 'id' }, item,
			function(response) {
				console.log("putTask direct",response);
			},
			function(error) {
				console.log("putTask direct",response);
			});
	}

	//完成订单
	// $scope.completeTasks = function(task){
	// 	var item = {
  	// 		"action" : "complete",
  	// 		"variables" : []
	// 	}
	// 	getTaskList.completeTask().complete({"taskid":task},item,function(suc){
	// 		$scope.getTasks();
    //
	// 	},function(err){
	// 		alert(err);
	// 	});
	// }
}])
