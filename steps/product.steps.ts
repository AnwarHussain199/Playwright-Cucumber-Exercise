import { Then, When } from '@cucumber/cucumber';
import { getPage } from '../playwrightUtilities';
import { Product } from '../pages/product.page';
import { Cart } from '../pages/cart.page';

When('I will add the backpack to the cart', async () => {
  await new Product(getPage()).addBackPackToCart();
});

When('I select the cart', async () => {
  await new Cart(getPage()).selectCart();
});

When('I select Checkout', async () => {
  await new Cart(getPage()).selectCheckout();
});

When('I fill in the First Name as {string}, Last Name as {string}, and Zip\\/Postal Code as {string}', async (firstName: string, lastName: string, zip: string) => {
  await new Cart(getPage()).fillInUserInfo(firstName, lastName, zip);
});

When('I select Continue', async () => {
  await new Cart(getPage()).selectContinue();
});

When('I select Finish', async () => {
  await new Cart(getPage()).selectFinish();
});

// Then('I validate the text {string}', async (expectedText: string) => {
//   await new Cart(getPage()).validateSuccessMessage(expectedText);
// });

// When('I sort the items by {string}', async (sortOption: string) => {
//   await new Product(getPage()).sortItemsBy(sortOption);
// });

Then('I validate all 6 items are sorted correctly by price {string}', async (sortOrder: string) => {
  await new Product(getPage()).validateSortedItemsByPrice(sortOrder);
});
