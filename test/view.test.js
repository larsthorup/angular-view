describe('template', function () {
	var indexHtml;

	beforeEach(function(){
		indexHtml = $.ajax('src/template.html', {async: false}).responseText;
	});

    it('works', function () {
        expect($(indexHtml).find('div').length).toBe(1);
    })
});

describe('view', function () {
    var $compile, $rootScope, template;
    var indexHtml;

    beforeEach(inject(function($templateCache, _$compile_, _$rootScope_) {

//        template = $templateCache.get('main/webapp/templates/ssnControl.htm');
//        $templateCache.put('/myApp/templates/ssnControl.htm',template);
        indexHtml = $.ajax('src/template.html', {async: false}).responseText;

        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it('should connect the div', function () {
        $rootScope.isOn = false;
        var formElement = angular.element(indexHtml);
        var element = $compile(formElement)($rootScope);
        $rootScope.$digest();

        var div = formElement.find('div');
        expect(div.css('display')).toBe('none');
    });

    it('should connect the button with the div', function () {
        $rootScope.isOn = false;
        var formElement = angular.element(indexHtml);
        var element = $compile(formElement)($rootScope);
        $rootScope.$digest();

        var button = formElement.find('button');
        button.trigger('click');

        var div = formElement.find('div');
        expect(div.css('display')).toBe('');
    });

});