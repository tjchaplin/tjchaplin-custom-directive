angular.module('tjchaplinCustomDirective',[])
	.directive('tjchaplinCustomDirective',function() {
		return {
			restrict: 'E', //Restrict directive to Elements(E)
			template : 'A tjchaplin Custom Directive' //Define the output of the directive
		}
	});