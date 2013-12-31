describe('app', function () {
    var templateHtml;

    beforeEach(inject(function($templateCache) {
        templateHtml = $templateCache.get('src/template.html');
        if(!templateHtml) {
            templateHtml = $.ajax('src/template.html', {async: false}).responseText;
            $templateCache.put('src/template.html', templateHtml)
        }
    }));

    describe('template', function () {
        it('works', function () {
            expect($(templateHtml).find('div').length).toBe(1);
        })
    });

    describe('view', function () {
        var $compile, $rootScope, formElement;

        beforeEach(inject(function(_$compile_, _$rootScope_) {
            $compile = _$compile_;
            $rootScope = _$rootScope_;
            $rootScope.isOn = false;
            formElement = angular.element(templateHtml);
            var element = $compile(formElement)($rootScope);
            $rootScope.$digest();
        }));

        it('should connect the div', function () {
            var div = formElement.find('div');
            expect(div.css('display')).toBe('none');
        });

        it('should connect the button with the div', function () {
            var button = formElement.find('button');
            button.trigger('click');

            var div = formElement.find('div');
            expect(div.css('display')).toBe('');
        });

    });

});

