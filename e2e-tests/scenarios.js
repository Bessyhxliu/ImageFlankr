'use strict';

describe('PhoneCat Application', function() {
	it('should redirect `index.html` to `index.html#/', function() {
    	browser.get('index.html');
    	expect(browser.getLocationAbsUrl()).toBe('/');
  });
	
})