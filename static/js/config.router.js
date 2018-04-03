angular.module('app')
	.run(
		['$rootScope', '$state', '$stateParams', '$localStorage', '$templateCache', '$cacheFactory', '$location',
			function($rootScope, $state, $stateParams, $localStorage, $templateCache, $cacheFactory, $location) {
				$rootScope.$state = $state;
				$rootScope.$stateParams = $stateParams;
				// 可以在这里做一些全局配置 如下 路由变化清除所有html缓存
				var stateChangeSuccess = $rootScope.$on('$stateChangeSuccess', stateChangeSuccess);
				function stateChangeSuccess($rootScope) {
				   $templateCache.removeAll();
				}
				/*$rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {
					console.log(toState);
					console.log(JSON.stringify(toParams));
					console.log(fromState);
					console.log(fromParams);
					if(toState.name == "login" && $localStorage.applogin) {
						$location.path("/home");
						return;
					}
					if(!$localStorage.applogin && toState.name != "login") {
						$location.path("/login");
						return;
					}
					$rootScope.navbarshow = true;
				});*/
			}
		]
	)
    // ui-router 的配置在这里
	.config(['$stateProvider', '$urlRouterProvider',
		function($stateProvider, $urlRouterProvider) {
            // 所有不合法路由都会进入的state
			$urlRouterProvider
				.otherwise('home');
            // states 都能用
			$stateProvider
                // 方法一
				.state('home', {
					cache:false,
					url: '/home',
					templateUrl: 'tpl/menu/home.html',
					// controller: 'homeCtrl',
				})
                // 方法二
				.state('deviceManage',{
                    cache:false,
                    url:'/devicemanagectrl',
                    templateUrl:'tpl/menu/deviceManage.html',
                    controller: 'deviceManageCtrl',
                    resolve:{
                        deps:["$ocLazyLoad",function($ocLazyLoad){
                            return $ocLazyLoad.load("js/controller/deviceManageCtrl.js")
                        }]
                    }
                })

		}
	]

);
