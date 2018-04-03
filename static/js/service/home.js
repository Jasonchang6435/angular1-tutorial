// serviceName , 回调参数注入$resource
app.service('getTaskList',function($resource){
	var mesURL = '/api'
	this.getList = function(){
		var data = $resource(mesURL+'activiti-rest/service/runtime/tasks?processDefinitionKey=helloWorldProcess&unassigned=true',{},{
			get:{
				method:'GET'

			}
		});
	    return data;
	}

	this.postTask = function(item){
		var data = $resource(mesURL+'activiti-rest/service/runtime/process-instances',{},{
			save:{
			    method:'POST',
			    url:'',
			    params:{},
			    withCredentials:true,
			    responseType:'json'
			}
		});
		return data;
	}

	this.completeTask = function(){
		var data = $resource(mesURL+'/tasks/:taskid',{taskId: "@taskId"},{
			complete:{
			    method:'POST',
			    url:'',
			    params:{},
			    withCredentials:true,
			    responseType:'json'
			}
		});
		return data;
	}

	//
	this.putTask = function(){
		var data = $resource(mesURL+'/tasks/:taskid',{taskId: "@taskId"},{
			update:{
				method:'PUT',
				url:'',
				params:{},
				withCredentials:true,
				responseType:'json',
				cache:false
			}
		});
		return data;
	}

	//
	this.getLoginUser = function(){
		var data = $resource(mesURL+'/user/loginUser',{},{
			get:{
				method:'GET',
				cache:false
			}
		});
		return data;
	}

	/*return {
		task :function(token){
			var uri = 'http://192.168.37.90:8080/activiti-rest/service/runtime/tasks?processDefinitionKey=myProcess&unassigned=true';
			return $resource(uri,{},{
				query: {
		            method: 'GET',
		            isArray:true,
		            headers: {
		                Authorization: ' Basic ' + token
		            }
		        }
			});
		}
	}*/

});
