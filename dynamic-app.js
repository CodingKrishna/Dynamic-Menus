var dynamicMenuApp = angular.module("dynamicMenuApp",[]);

dynamicMenuApp.controller("dynamicMenuCtrl", function($scope){

	$scope.appName = "Dynamic Menu with AngularJS";
	$scope.dynamicMenus = [{rootMenu : "UI", menuItems:["HTML", "CSS","JS", "JQuery", "AngularJS"]},
						{rootMenu : "Programming", menuItems:["C", "C++","JAVA", "J2EE", "Spring","Hibernate"]},
						{rootMenu : "Mobile", menuItems:["Android", "IOS"]},
						{rootMenu : "Tools", menuItems:["Ant", "Maveen"]}];



});

dynamicMenuApp.directive('dynamicMenu', function() {

	var directiveObj = {};
	directiveObj.restrict= 'E';
	directiveObj.scope = true;
	directiveObj.template = ' <ul ng-repeat=" dynaMenu in dynamicMenus"> {{dynaMenu.rootMenu}}'+
								'<li ng-repeat=" menuItem in dynaMenu.menuItems"> {{menuItem}} <li>'+
							  '</ul> ';

	return directiveObj;				  
});