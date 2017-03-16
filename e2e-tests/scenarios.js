'use strict';

describe('PublicFeed Application', function() {
	it('should redirect `index.html` to `index.html#/', function() {
    	browser.get('index.html');
    	expect(browser.getLocationAbsUrl()).toBe('/');
  });
	
})