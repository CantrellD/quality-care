"use strict";function HeaderCtrl(a){a.header={name:"header.html",url:"header.html"}}angular.module("qualityCareApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/contact",{templateUrl:"views/contact.html",controller:"ContactCtrl",controllerAs:"contact"}).when("/language",{templateUrl:"views/language_selection.html",controller:"LanguageSelectionCtrl",controllerAs:"language_selection"}).when("/personal",{templateUrl:"views/personal_info.html",controller:"PersonalInfoCtrl",controllerAs:"personal_info"}).when("/medical",{templateUrl:"views/medical_history.html",controller:"MedicalHistoryCtrl",controllerAs:"medical_history"}).when("/privacy",{templateUrl:"views/privacy.html",controller:"PrivacyCtrl",controllerAs:"privacy"}).otherwise({redirectTo:"/"})}]),$(".nav a").on("click",function(){$(".nav").find(".active").removeClass("active"),$(this).parent().addClass("active")}),angular.module("qualityCareApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma","SitePoint"]}),angular.module("qualityCareApp").controller("AboutCtrl",function(){}),angular.module("qualityCareApp").controller("ContactCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("qualityCareApp").controller("LanguageSelectionCtrl",function(){}),angular.module("qualityCareApp").controller("MedicalHistoryCtrl",function(){}),angular.module("qualityCareApp").controller("PersonalInfoCtrl",function(){}),angular.module("qualityCareApp").run(["$templateCache",function(a){a.put("views/about.html",'<div class="about-body"> <div> <h2> ABOUT BODY </h2> </div> <div> Quality Care is a medical translation app aimed at supporting patients fill out their medical history forms... </div> </div>'),a.put("views/contact.html","<h1> Contact Information </h1> Copy / paste from my personal website. Edit <h2> Email Address </h2> klinkhae [at] oregonstate.edu <h2> Phone Number </h2> Work: <br> Cell: <br> Fax: <br> <h2> Mailing Address </h2> Eric Klinkhammer <br> Graf Hall <br> 1680 SW Monroe Ave <br> Corvallis, OR 97331 <br>"),a.put("views/language_selection.html",'<div> <h2> Language Selection </h2> </div> <nav class="navbar navbar-default" role="navigation"> <div class="navbar-header"> <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> </div> <div class="navbar-collapse collapse"> <ul class="nav navbar-nav navbar-left"> <li><a href="#">Restart</a></li> </ul> <ul class="nav navbar-nav navbar-right"> <li><a href="#!/personal">Personal Information Form</a></li> </ul> </div> </nav>'),a.put("views/main.html",'<div> <h2> Welcome to Quality Care. </h2> </div> <nav class="navbar navbar-default" role="navigation"> <div class="navbar-header"> <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> </div> <div class="navbar-collapse collapse"> <ul class="nav navbar-nav navbar-right"> <li><a href="#!/language">Language Selection</a></li> </ul> </div> </nav>'),a.put("views/medical_history.html",'<div> <h2> Medical History </h2> </div> <nav class="navbar navbar-default" role="navigation"> <div class="navbar-header"> <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> </div> <div class="navbar-collapse collapse"> <ul class="nav navbar-nav navbar-left"> <li><a href="#">Restart</a></li> </ul> <ul class="nav navbar-nav navbar-right"> <li>Send Email (hide button until questions answered)</li> </ul> </div> </nav>'),a.put("views/personal_info.html",'<div> <h2> Personal Information Form </h2> </div> <nav class="navbar navbar-default" role="navigation"> <div class="navbar-header"> <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> </div> <div class="navbar-collapse collapse"> <ul class="nav navbar-nav navbar-left"> <li><a href="#">Restart</a></li> </ul> <ul class="nav navbar-nav navbar-right"> <li><a href="#!/medical">Begin Medical History</a></li> </ul> </div> </nav>'),a.put("views/privacy.html","<h2> Privacy Statement </h2> Here at Quality Care, we take HIPPA / your privacy seriously...")}]);