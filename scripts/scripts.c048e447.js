"use strict";angular.module("qualityCareApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/contact",{templateUrl:"views/contact.html",controller:"ContactCtrl",controllerAs:"contact"}).when("/language",{templateUrl:"views/language_selection.html",controller:"LanguageSelectionCtrl",controllerAs:"language_selection"}).when("/personal",{templateUrl:"views/personal_info.html",controller:"PersonalInfoCtrl",controllerAs:"personal_info"}).when("/medical",{templateUrl:"views/medical_history.html",controller:"MedicalHistoryCtrl",controllerAs:"medical_history"}).when("/privacy",{templateUrl:"views/privacy.html",controller:"PrivacyCtrl",controllerAs:"privacy"}).when("/demo/name",{templateUrl:"views/demo_name.html",controller:"DemoCtrl",controllerAs:"demo"}).when("/demo/misc",{templateUrl:"views/demo_misc.html",controller:"DemoCtrl",controllerAs:"demo"}).when("/demo/symptoms",{templateUrl:"views/demo_symptoms.html",controller:"DemoCtrl",controllerAs:"demo"}).when("/demo/locations",{templateUrl:"views/demo_locations.html",controller:"DemoCtrl",controllerAs:"demo"}).when("/demo/onset",{templateUrl:"views/demo_onset.html",controller:"DemoCtrl",controllerAs:"demo"}).when("/demo/description",{templateUrl:"views/demo_description.html",controller:"DemoCtrl",controllerAs:"demo"}).when("/demo/allergies",{templateUrl:"views/demo_allergies.html",controller:"DemoCtrl",controllerAs:"demo"}).when("/demo/medications",{templateUrl:"views/demo_medications.html",controller:"DemoCtrl",controllerAs:"demo"}).when("/demo/hazards",{templateUrl:"views/demo_hazards.html",controller:"DemoCtrl",controllerAs:"demo"}).when("/demo/relief",{templateUrl:"views/demo_relief.html",controller:"DemoCtrl",controllerAs:"demo"}).when("/demo/end",{templateUrl:"views/demo_end.html",controller:"DemoCtrl",controllerAs:"demo"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),$(".nav a").on("click",function(){$(".nav").find(".active").removeClass("active"),$(this).parent().addClass("active")}),angular.module("qualityCareApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma","SitePoint"]}),angular.module("qualityCareApp").controller("AboutCtrl",function(){}),angular.module("qualityCareApp").controller("ContactCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("qualityCareApp").controller("LanguageSelectionCtrl",function(){this.language="N/A",this.languageOptions=["English"]}),angular.module("qualityCareApp").controller("MedicalHistoryCtrl",function(){}),angular.module("qualityCareApp").controller("PersonalInfoCtrl",function(){}),angular.module("qualityCareApp").controller("PrivacyCtrl",function(){}),angular.module("qualityCareApp").controller("DemoCtrl",function(){var a=0;for(this.firstName="N/A",this.lastName="N/A",this.address="N/A",this.city="N/A",this.state="N/A",this.zip="N/A",this.phone="N/A",this.symptoms={},this.symptomNames=["Other","Bleeding","Bruise","Congestion","Constipation","Cough","Diarrhea","Dizziness","Headaches","Nausea","Numbness","Pain","Sore Throat","Swelling","Wheezing"],a=0;a<this.symptomNames.length;a++){var b=this.symptomNames[a];this.symptoms[b]=!1}for(this.locations={},this.locationNames=["Other","Abdomen","Back","Chest","Eye","Foot","Hand","Head","Hip","Knee","Neck","Pelvis","Shoulder","Throat"],a=0;a<this.locationNames.length;a++){var c=this.locationNames[a];this.locations[c]=!1}for(this.onsetYear="N/A",this.onsetMonth="N/A",this.onsetDay="N/A",this.onsetHour="N/A",this.onsetMinute="N/A",this.onsetSecond="N/A",this.descriptions={},this.descriptionNames=["Other","Annoying","Burning","Cold","Hot","Irritating","Itching","Numb","Puss","Radiating","Sharp","Tender"],a=0;a<this.descriptionNames.length;a++){var d=this.descriptionNames[a];this.descriptions[d]=!1}for(this.allergies={},this.allergyNames=["Other","Dairy","Eggs","Fish","Peanuts","Seeds","Sesame","Shellfish","Soy","Spices","Treenuts","Wheat"],a=0;a<this.allergyNames.length;a++){var e=this.allergyNames[a];this.allergies[e]=!1}for(this.medications={},this.medicationNames=["Acetaminophen","Adderall","Alprazolam","Amitriptyline","Amlodipine","Amoxicillin","Ativan","Atorvastatin","Azithromycin","Ciprofloxacin","Citalopram","Clindamycin","Clonazepam","Codeine","Cyclobenzaprine","Cymbalta","Doxycycline","Gabapentin","Hydrochlorothiazide","Ibuprofen","Lexapro","Lisinopril","Loratadine","Lorazepam","Losartan","Lyrica","Meloxicam","Metformin","Metoprolol","Naproxen","Omeprazole","Oxycodone","Pantoprazole","Prednisone","Tramadol","Trazodone","Wellbutrin","Xanax","Zoloft"],a=0;a<this.medicationNames.length;a++){var f=this.medicationNames[a];this.medications[f]=!1}for(this.hazards={},this.hazardNames=["Other","Nothing","Cold","Exercise","Heat","Leaning","Lifting","Lying Down","Medications","Standing","Stress","Smoking"],a=0;a<this.hazardNames.length;a++){var g=this.hazardNames[a];this.hazards[g]=!1}for(this.reliefs={},this.reliefNames=["Other","Nothing","Coconut Oil","Cold","Epsom Salt","Exercise","Heat","Lying Down","Massage","Movement","Rest","Water"],a=0;a<this.reliefNames.length;a++){var h=this.reliefNames[a];this.reliefs[h]=!1}}),angular.module("qualityCareApp").run(["$templateCache",function(a){a.put("views/about.html",'<div class="about-body"> <div> <h2> ABOUT BODY </h2> </div> <div> Quality Care is a medical translation app aimed at supporting patients fill out their medical history forms... </div> </div>'),a.put("views/contact.html","<h1> Contact Information </h1> Copy / paste from my personal website. Edit <h2> Email Address </h2> klinkhae [at] oregonstate.edu <h2> Phone Number </h2> Work: <br> Cell: <br> Fax: <br> <h2> Mailing Address </h2> Eric Klinkhammer <br> Graf Hall <br> 1680 SW Monroe Ave <br> Corvallis, OR 97331 <br>"),a.put("views/demo_allergies.html",'<h2>Do you have allergies to anything?</h2> <div class="form-group"> <label class="control-label">Filter: <input ng-model="demo.filter" class="form-control"> </label> </div> <div class="pre-scrollable"> <div ng-repeat="key in demo.allergyNames | filter:demo.filter" class="form-check"> <label class="form-check-label"> <input type="checkbox" ng-model="demo.allergies[key]" class="form-check-input"> {{key}} </label> </div> </div> <nav class="navbar navbar-default" role="navigation"> <div class="navbar-header"> <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> </div> <div class="navbar-collapse collapse"> <ul class="nav navbar-nav navbar-left"> <li><a href="#">Restart</a></li> </ul> <ul class="nav navbar-nav navbar-right"> <li><a href="#!/demo/medications">Next</a></li> </ul> </div> </nav>'),a.put("views/demo_description.html",'<h2>How do you describe your symptoms?</h2> <div class="form-group"> <label class="control-label">Filter: <input ng-model="demo.filter" class="form-control"> </label> </div> <div class="pre-scrollable"> <div ng-repeat="key in demo.descriptionNames | filter:demo.filter" class="form-check"> <label class="form-check-label"> <input type="checkbox" ng-model="demo.descriptions[key]" class="form-check-input"> {{key}} </label> </div> </div> <nav class="navbar navbar-default" role="navigation"> <div class="navbar-header"> <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> </div> <div class="navbar-collapse collapse"> <ul class="nav navbar-nav navbar-left"> <li><a href="#">Restart</a></li> </ul> <ul class="nav navbar-nav navbar-right"> <li><a href="#!/demo/allergies">Next</a></li> </ul> </div> </nav>'),a.put("views/demo_end.html",'<h2>Thank you for answering the questions!</h2> <p>Please hit "Return to menu" before exiting the window.</p> <nav class="navbar navbar-default" role="navigation"> <div class="navbar-header"> <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> </div> <div class="navbar-collapse collapse"> <ul class="nav navbar-nav navbar-left"> <li><a href="#">Return to menu</a></li> </ul> </div> </nav>'),a.put("views/demo_hazards.html",'<h2>Is there anything that exacerbates your symptoms?</h2> <div class="form-group"> <label class="control-label">Filter: <input ng-model="demo.filter" class="form-control"> </label> </div> <div class="pre-scrollable"> <div ng-repeat="key in demo.hazardNames | filter:demo.filter" class="form-check"> <label class="form-check-label"> <input type="checkbox" ng-model="demo.hazards[key]" class="form-check-input"> {{key}} </label> </div> </div> <nav class="navbar navbar-default" role="navigation"> <div class="navbar-header"> <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> </div> <div class="navbar-collapse collapse"> <ul class="nav navbar-nav navbar-left"> <li><a href="#">Restart</a></li> </ul> <ul class="nav navbar-nav navbar-right"> <li><a href="#!/demo/relief">Next</a></li> </ul> </div> </nav>'),a.put("views/demo_locations.html",'<h2>Where do your symptoms occur?</h2> <div class="form-group"> <label class="control-label">Filter: <input ng-model="demo.filter" class="form-control"> </label> </div> <div class="pre-scrollable"> <div ng-repeat="key in demo.locationNames | filter:demo.filter" class="form-check"> <label class="form-check-label"> <input type="checkbox" ng-model="demo.locations[key]" class="form-check-input"> {{key}} </label> </div> </div> <nav class="navbar navbar-default" role="navigation"> <div class="navbar-header"> <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> </div> <div class="navbar-collapse collapse"> <ul class="nav navbar-nav navbar-left"> <li><a href="#">Restart</a></li> </ul> <ul class="nav navbar-nav navbar-right"> <li><a href="#!/demo/onset">Next</a></li> </ul> </div> </nav>'),a.put("views/demo_medications.html",'<h2>Are you currently taking any medications?</h2> <div class="form-group"> <label class="control-label">Filter: <input ng-model="demo.filter" class="form-control"> </label> </div> <div class="pre-scrollable"> <div ng-repeat="key in demo.medicationNames | filter:demo.filter" class="form-check"> <label class="form-check-label"> <input type="checkbox" ng-model="demo.medications[key]" class="form-check-input"> {{key}} </label> </div> </div> <nav class="navbar navbar-default" role="navigation"> <div class="navbar-header"> <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> </div> <div class="navbar-collapse collapse"> <ul class="nav navbar-nav navbar-left"> <li><a href="#">Restart</a></li> </ul> <ul class="nav navbar-nav navbar-right"> <li><a href="#!/demo/hazards">Next</a></li> </ul> </div> </nav>'),a.put("views/demo_misc.html",'<div class="form-group"> <label for="address" class="control-label">Address:</label> <input type="text" ng-model="demo.address" id="address" class="form-control"> </div> <div class="row"> <div class="form-group col-sm-4"> <label for="city" class="control-label">City:</label> <input type="text" ng-model="demo.city" id="city" class="form-control"> </div> <div class="form-group col-sm-4"> <label for="state" class="control-label">State:</label> <input type="text" ng-model="demo.state" id="state" class="form-control"> </div> <div class="form-group col-sm-4"> <label for="zip" class="control-label">ZIP:</label> <input type="text" ng-model="demo.zip" id="zip" class="form-control"> </div> </div> <div class="form-group"> <label for="phone" class="control-label">Phone Number (H):</label> <input type="text" ng-model="demo.phone" id="phone" class="form-control"> </div> <nav class="navbar navbar-default" role="navigation"> <div class="navbar-header"> <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> </div> <div class="navbar-collapse collapse"> <ul class="nav navbar-nav navbar-left"> <li><a href="#">Restart</a></li> </ul> <ul class="nav navbar-nav navbar-right"> <li><a href="#!/demo/symptoms">Next</a></li> </ul> </div> </nav>'),a.put("views/demo_name.html",'<div class="row"> <div class="form-group col-sm-6"> <label for="firstName" class="control-label">First name:</label> <input type="text" ng-model="demo.firstName" id="firstName" class="form-control"> </div> <div class="form-group col-sm-6"> <label for="lastName" class="control-label">Last Name:</label> <input type="text" ng-model="demo.lastName" id="lastName" class="form-control"> </div> </div> <nav class="navbar navbar-default" role="navigation"> <div class="navbar-header"> <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> </div> <div class="navbar-collapse collapse"> <ul class="nav navbar-nav navbar-left"> <li><a href="#">Restart</a></li> </ul> <ul class="nav navbar-nav navbar-right"> <li><a href="#!/demo/misc">Next</a></li> </ul> </div> </nav>'),a.put("views/demo_onset.html",'<h2>When did it start?</h2> <div class="row"> <div class="form-group col-sm-4"> <label for="year" class="control-label">Year:</label> <input type="text" ng-model="demo.onsetYear" class="form-control" id="year"> </div> <div class="form-group col-sm-4"> <label for="month" class="control-label">Month:</label> <input type="text" ng-model="demo.onsetMonth" class="form-control" id="month"> </div> <div class="form-group col-sm-4"> <label for="day" class="control-label">Day:</label> <input type="text" ng-model="demo.onsetDay" class="form-control" id="day"> </div> </div> <div class="row"> <div class="form-group col-sm-4"> <label for="hour" class="control-label">Hour:</label> <input type="text" ng-model="demo.onsetHour" class="form-control" id="hour"> </div> <div class="form-group col-sm-4"> <label for="minute" class="control-label">Minute:</label> <input type="text" ng-model="demo.onsetMinute" class="form-control" id="minute"> </div> <div class="form-group col-sm-4"> <label for="second" class="control-label">Second:</label> <input type="text" ng-model="demo.onsetSecond" class="form-control" id="second"> </div> </div> <nav class="navbar navbar-default" role="navigation"> <div class="navbar-header"> <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> </div> <div class="navbar-collapse collapse"> <ul class="nav navbar-nav navbar-left"> <li><a href="#">Restart</a></li> </ul> <ul class="nav navbar-nav navbar-right"> <li><a href="#!/demo/description">Next</a></li> </ul> </div> </nav>'),a.put("views/demo_relief.html",'<h2>Is there anything that relieves your symptoms?</h2> <div class="form-group"> <label class="control-label">Filter: <input ng-model="demo.filter" class="form-control"> </label> </div> <div class="pre-scrollable"> <div ng-repeat="key in demo.reliefNames | filter:demo.filter" class="form-check"> <label class="form-check-label"> <input type="checkbox" ng-model="demo.reliefs[key]" class="form-check-input"> {{key}} </label> </div> </div> <nav class="navbar navbar-default" role="navigation"> <div class="navbar-header"> <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> </div> <div class="navbar-collapse collapse"> <ul class="nav navbar-nav navbar-left"> <li><a href="#">Restart</a></li> </ul> <ul class="nav navbar-nav navbar-right"> <li><a href="#!/demo/end">Next</a></li> </ul> </div> </nav>'),a.put("views/demo_symptoms.html",'<h2>Why are you here today?</h2> <div class="form-group"> <label class="control-label">Filter: <input ng-model="demo.filter" class="form-control"> </label> </div> <div class="pre-scrollable"> <div ng-repeat="key in demo.symptomNames | filter:demo.filter" class="form-check"> <label class="form-check-label"> <input type="checkbox" ng-model="demo.symptoms[key]" class="form-check-input"> {{key}} </label> </div> </div> <nav class="navbar navbar-default" role="navigation"> <div class="navbar-header"> <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> </div> <div class="navbar-collapse collapse"> <ul class="nav navbar-nav navbar-left"> <li><a href="#">Restart</a></li> </ul> <ul class="nav navbar-nav navbar-right"> <li><a href="#!/demo/locations">Next</a></li> </ul> </div> </nav>'),a.put("views/language_selection.html",'<div> <h2>What is your preferred language?</h2> </div> <div class="form-group"> <select ng-init="language_selection.language = language_selection.languageOptions[0]" ng-model="language_selection.language" ng-options="option for option in language_selection.languageOptions" class="form-control"> </select> </div> <nav class="navbar navbar-default" role="navigation"> <div class="navbar-header"> <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> </div> <div class="navbar-collapse collapse"> <ul class="nav navbar-nav navbar-left"> <li><a href="#">Restart</a></li> </ul> <ul class="nav navbar-nav navbar-right"> <li><a href="#!/demo/name">Begin</a></li> </ul> </div> </nav>'),a.put("views/main.html",'<div> <h2> Welcome to Quality Care! </h2> </div> <nav class="navbar navbar-default" role="navigation"> <div class="navbar-header"> <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> </div> <div class="navbar-collapse collapse"> <ul class="nav navbar-nav navbar-right"> <li><a href="#!/language">Language Selection</a></li> </ul> </div> </nav>'),a.put("views/medical_history.html",'<div> <h2> Medical History </h2> </div> <nav class="navbar navbar-default" role="navigation"> <div class="navbar-header"> <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> </div> <div class="navbar-collapse collapse"> <ul class="nav navbar-nav navbar-left"> <li><a href="#">Restart</a></li> </ul> <ul class="nav navbar-nav navbar-right"> <li>Send Email (hide button until questions answered)</li> </ul> </div> </nav>'),a.put("views/personal_info.html",'<div> <h2> Personal Information Form </h2> </div> <nav class="navbar navbar-default" role="navigation"> <div class="navbar-header"> <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> </div> <div class="navbar-collapse collapse"> <ul class="nav navbar-nav navbar-left"> <li><a href="#">Restart</a></li> </ul> <ul class="nav navbar-nav navbar-right"> <li><a href="#!/medical">Begin Medical History</a></li> </ul> </div> </nav>'),a.put("views/privacy.html","<h2> Privacy Statement </h2> Here at Quality Care, we take HIPPA / your privacy seriously...")}]);