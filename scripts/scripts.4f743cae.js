(function(){"use strict";angular.module("gamenApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch","ngMaterial","ngHolder","ngMockE2E"]).value("apiEndpoint","http://suburi.example.com").config(["$routeProvider",function(a){return a.when("/",{templateUrl:"views/createapi.html",controller:"CreateApiCtrl",controllerAs:"createApi"}).otherwise({redirectTo:"/"})}])}).call(this),function(){"use strict";angular.module("gamenApp").controller("CreateApiCtrl",["$scope","CreateApiService","GetTagService",function(a,b,c){return a.previewFlag=!0,a.data=void 0,a.CreateApiString=function(){return a.apiUrl=b(a.tagUrl,a.tagQuerySelector,a.tagUserAgent,a.tagDevice)},a.GetTag=function(){return c(a.apiUrl).then(function(b){return a.data=b.data})}}])}.call(this),function(){"use strict";angular.module("gamenApp").service("CreateApiService",["apiEndpoint",function(a){var b,c;return b="",c=function(c,d,e,f){return b=""+a+"?url="+c+"&querySelector="+d+"&userAgent="+e+"&device="+f}}])}.call(this),function(){"use strict";angular.module("gamenApp").service("GetTagService",["$http",function(a){return function(b){return a.get(b).then(function(a){return a}).then(function(a){return a})}}])}.call(this),angular.module("gamenApp").run(["$templateCache",function(a){"use strict";a.put("views/createapi.html",'<div class="createapi"> <div layout="column" flex> <md-toolbar class="md-whiteframe-z2"> <div class="md-toolbar-tools"> <h2 class="md-toolbar-item">広告取得APIの作成</h2> </div> </md-toolbar> <md-content flex layout-padding> <md-content> <p>スマートデバイス向け広告が正しく表示されているかを確認できるツールです。下記のフォームに広告ページとQuerySelector、User Agent、機種を入力してください。</p> </md-content> <md-content class="md-whiteframe-z1 createapi-form"> <form layout="column"> <md-input-container> <label for="tag-url">広告URL</label> <input ng-model="tagUrl" type="text" class="md-input" id="tag-url"> </md-input-container> <md-input-container> <label for="tag-query-selector">QuerySelector</label> <input ng-model="tagQuerySelector" type="text" class="md-input" id="tag-query-selector"> </md-input-container> <div layout="row"> <md-input-container flex="50"> <label for="tag-user-agent">UserAgent</label> <input ng-model="tagUserAgent" type="text" class="md-input" id="tag-user-agent"> </md-input-container> <md-input-container flex="50"> <label for="tag-device">機種</label> <input ng-model="tagDevice" type="text" class="md-input" id="tag-device"> </md-input-container> </div> <md-button ng-click="CreateApiString()" class="md-raised md-primary createapi-submit"> 広告取得APIを作成する </md-button> </form> </md-content> </md-content> <div ng-show="apiUrl" flex layout-padding> <md-content class="md-whiteframe-z1"> <md-toolbar> <div class="md-toolbar-tools"> <h3>広告取得API</h3> </div> </md-toolbar> <md-content class="md-padding"> <md-content> {{apiUrl}} </md-content> </md-content> <div layout="column"> <md-button ng-click="GetTag()" class="md-raised md-warn"> プレビューを表示する </md-button> <div layout="row" layout-padding layout-align="center"> <img ng-show="!data" class="createapi-preview-img" holder data-src="holder.js/400x200?text=ここにプレビュー"> <img ng-show="data" ng-src="{{data.image}}"> </div> </div> </md-content> </div> </div> </div>'),a.put("views/sidemenu.html",'<div class="sidemenu"> <h1 class="md-toolbar-tools">suburi.example.com</h1> <md-content layout="column"> <md-ink-ripple class="md-button">広告取得APIの作成</md-ink-ripple> <md-ink-ripple class="md-button">ストック</md-ink-ripple> </md-content> </div>')}]);