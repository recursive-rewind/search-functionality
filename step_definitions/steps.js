const { I } = inject();
// Add in your custom step files

Given('', () => {
  I.amOnPage('https://demo.reactstorefront.io/');
});

When('I enter product into search bar', (table) => {

  for (const record in table.rows) {
    if (record < 1) {
      continue;
    }
    const cellValue = table.rows[record].cells;
    const input = cellValue[0].value;
    I.fillField("//header/div[1]/div[1]/div[3]/div[1]/form[1]/div[1]/div[1]/input[1]", input);
    I.pressKey('Enter');
  }
});

Then('I should see the result in search results', (table) => {
  for (const record in table.rows) {
    if (record < 1) {
      continue;
    }
    const cellValue = table.rows[record].cells;
    const result = cellValue[1].value;
    I.seeTextEquals(result, '//body[1]/div[1]/main[1]/div[1]/div[2]/div[2]/div[7]/ul[1]/li[1]/div[1]/div[1]/div[1]/div[2]/h6[1]');
  }
});
