const { I } = inject();
// Add in your custom step files

Given('', () => {
  I.amOnPage('https://demo.reactstorefront.io/');
});

When('I enter {product} into search bar', (input) => {
  I.fillField("//header/div[1]/div[1]/div[3]/div[1]/form[1]/div[1]/div[1]/input[1]", input);
  I.pressKey('Enter');

});

Then('I should see the {output} in search results', (result) => {
  I.seeTextEquals(result, '//body[1]/div[1]/main[1]/div[1]/div[2]/div[2]/div[7]/ul[1]/li[1]/div[1]/div[1]/div[1]/div[2]/h6[1]');
});
