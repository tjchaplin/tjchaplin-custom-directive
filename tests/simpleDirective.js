describe('Given we are testing a simple directive',function(){
	var $compile = null;
	var $rootScope = null;

	beforeEach(function(){
		//Initialize module
		module('simpleDirective');

		//Get compile and rootscope
		inject(function(_$compile_, _$rootScope_){
			$compile = _$compile_;
			$rootScope = _$rootScope_;
		});
	});

	it('Should replace expected content over directive',function(){
		var element = $compile("<tjchaplin-custom-directive></tjchaplin-custom-directive")($rootScope);
		
		// evaluate all expressions
		$rootScope.$digest();

		//Expectation
		expect(element.html()).toContain("A Custom Directive");
	});
});