angular.module('simpleDirective',[])
	.directive('tjchaplinCustomDirective',function() {
		return {
			restrict: 'E', //Restrict directive to Elements(E)
			template : 'A Custom Directive' //Define the output of the directive
		}
	});