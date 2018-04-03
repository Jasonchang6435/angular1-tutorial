
app.directive('navigatordir',function(){
    return {
        restrict : 'EA',
        templateUrl : 'tpl/dir/navigatordir.html',
        controller: function ($scope,$window,$rootScope,$http,$state,$sessionStorage,$localStorage,getTaskList,$filter) {
            // utils
            var globalVars = function() {
                $scope.showBothRolls = false
            }

            // 页面加载顺序 service-》controller-》directive 所以 自执行的main函数放在这里
            var getLoginUser = function () {
                getTaskList.getLoginUser().get({},
                    function(response){
                        $scope.globalUserInfo = response
                        var roles = $scope.globalUserInfo.roles
                        $scope.loginUserGroups = roles
                        var groups = $scope.globalUserInfo.groups
                        $scope.loginUserRoles = groups.join(" ")
                        // 角色显示控制
                        $scope.showBothRolls = roles.includes("模型处理") || roles.includes("模型处理主管")
                        // controller 的main 函数
                        $scope.__main &&　$scope.__main()
                    } ,
                    function(error){
                        console.log('getLoginUser失败！')
                    }

                )
            }

            var main = function() {
                getLoginUser()
            }
            main()

        },

    }

})
