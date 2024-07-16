import { Then, When  } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Login } from '../pages/login.page';

Then('I should see the title {string}', async (expectedTitle) => {
  await new Login(getPage()).validateTitle(expectedTitle);
});

Then('I will login as {string}', async (userName) => {
  await new Login(getPage()).loginAsUser(userName);
});


When('I click on the login button', async () => {
  await new Login(getPage()).clickLoginButton();
});

Then('I got validation message as {string}', async (expectedMessage) => {
  await new Login(getPage()).validateErrorMessage(expectedMessage);
});
