import { When, Then } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';
import { Cart } from '../pages/cart.page';

When('I add the {string} to the cart', async (itemName: string) => {
  await new Product(getPage()).addItemToCart(itemName);
});


When('I fill in the First Name as {string}, Last Name as {string}, and Zip/Postal Code as {string}', async (firstName: string, lastName: string, zip: string) => {
  await new Cart(getPage()).fillInUserInfo(firstName, lastName, zip);
});


When('I sort the items by {string}', async (sortOption: string) => {
  await new Product(getPage()).sortItemsBy(sortOption);
});


Then('I verify the cart item count is {string}', async (expectedCount: string) => {
  await new Cart(getPage()).getCartItemCount();
});

Then('I delete the {string} from the cart', async (itemName: string) => {
  await new Cart(getPage()).deleteCartItem(itemName);
});

Then('I verify the cart item count is decreased by {string}', async (expectedDecrease: string) => {
  await new Cart(getPage()).getCartItemCount();
});

Then('I validate the text {string}', async (expectedText: string) => {
  await new Cart(getPage()).validateSuccessMessage(expectedText);
});
