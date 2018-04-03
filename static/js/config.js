// 套路配置 几乎可以不用管
var app = angular.module('app').config(
    ['$controllerProvider', '$compileProvider', '$filterProvider', '$provide','$sceDelegateProvider','$httpProvider',
    function ($controllerProvider,   $compileProvider,   $filterProvider,   $provide,$sceDelegateProvider,$httpProvider){
        // lazy controller, directive and service
        app.controller = $controllerProvider.register;
        app.directive  = $compileProvider.directive;
        app.filter     = $filterProvider.register;
        app.factory    = $provide.factory;
        app.service    = $provide.service;
        app.constant   = $provide.constant;
        app.value      = $provide.value;
        //$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
        $httpProvider.defaults.withCredentials = true;
        //delete $httpProvider.defaults.headers.common['X-Content-Type-Options'];
       // $httpProvider.defaults.headers.common['Authorization'] = 'Basic a2VybWl0Omtlcm1pdA==';

       // 官方 $apply bug 的补丁代码
       $provide.decorator('$rootScope', ['$delegate', '$exceptionHandler',
          function($delegate, $exceptionHandler) {
            var proto = Object.getPrototypeOf($delegate);
            var originalDigest = proto.$digest, originalApply = proto.$apply;
            proto.$digest = function() {
              if ($delegate.$$phase === '$digest' || $delegate.$$phase === '$apply') return;
              originalDigest.call(this);
            };
            proto.$apply = function(fn) {
              if ($delegate.$$phase === '$digest' || $delegate.$$phase === '$apply') {
                try {
                  this.$eval(fn);
                } catch(e) {
                  $exceptionHandler(e);
                }
              } else {
                originalApply.call(this, fn);
              }
            };
            return $delegate;
          }
        ])
        //
    }
  ]
)
