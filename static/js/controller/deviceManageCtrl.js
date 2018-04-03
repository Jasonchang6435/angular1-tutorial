// ctrl 名，注入的模块 和函数参数对应
app.controller('deviceManageCtrl', ['$scope', '$rootScope', '$state', '$sessionStorage', "$localStorage", '$stateParams', '$timeout', '$filter', '$window',
    function($scope, $rootScope, $state, $sessionStorage, $localStorage, $stateParams, $timeout, $filter, $window) {
        // $scope是 ctrl内的全局变量 挂载到$scope的变量才可以在页面直接使用指令
        // globalVars 管理所有全局变量
        var globalVars = function() {
            //
            $scope.searchTabShow = false
            $scope.addTabShow = false
            // ng-options需要赋值初始值
            $scope.workTypes = [
                {
                    name: '手工压膜',
                    val: 'manualThermoformming',
                },
                {
                    name: '自动打磨',
                    val: 'machinePolishing',
                },
                {
                    name: '自动压膜',
                    val: 'thermoformming',
                },
                {
                    name: '机器清洗',
                    val: 'machineCleaning',
                },
            ]
            $scope.addDeviceType = $scope.workTypes[0].val
            // 翻译
            $scope.typeToList = {
                'manualThermoformming': "手工压膜",
                'machinePolishing': "自动打磨",
                'thermoformming': "自动压膜",
                'machineCleaning': "机器清洗",
            }
        }

        $scope.requiredParam = function() {
            console.log("ng-change requiredParam")
        }

        // search
        // 用 jq 的ajax需要手动调用$scope.$apply手动同步$scope上的变量 百度$scope.$apply的情况
        $scope.searchDeviceList = function() {
            var data = [{"deviceCode":"d1","deviceName":"手工打磨","deviceType":"manualThermoformming","createBy":"string","createTime":"string","updateBy":"string","updateTime":"string","isDeleted":0,"deviceParameters":[{"key":"signCode","value":"1"},{"key":"thickness","value":"0.76"}]},{"deviceCode":"d2","deviceName":"手工打磨","deviceType":"manualThermoformming","createBy":"string","createTime":"string","updateBy":"string","updateTime":"string","isDeleted":0,"deviceParameters":[{"key":"signCode","value":"2"},{"key":"thickness","value":"0.4"}]}]
            $scope.deviceList = data

        }

        // 和ng-show搭配实现toggleTab的功能
        $scope.toggleAddTab = function() {
            $scope.addTabShow = !$scope.addTabShow
        }

        $scope.toggleSearchTab = function() {
            $scope.searchTabShow = !$scope.searchTabShow
        }

        $scope.__main = () => {
            globalVars()
        }
    }
])
