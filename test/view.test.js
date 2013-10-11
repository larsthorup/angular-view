describe('view', function () {
	var indexHtml;

	beforeEach(function(){
		indexHtml = $.ajax('src/template.html', {async: false}).responseText;
	});

    it('works', function () {
        expect($(indexHtml).find('div').length).toBe(1);
    })
});