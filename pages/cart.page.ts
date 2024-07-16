import { Page } from "@playwright/test";

export class Cart {
    private readonly page: Page;
    private readonly cartButton: string = '.shopping_cart_link';
    private readonly checkoutButton: string = 'button[data-test="checkout"]';
    private readonly firstNameField: string = 'input[data-test="firstName"]';
    private readonly lastNameField: string = 'input[data-test="lastName"]';
    private readonly zipField: string = 'input[data-test="postalCode"]';
    private readonly continueButton: string = 'input[data-test="continue"]';
    private readonly finishButton: string = 'button[data-test="finish"]';
    private readonly successMessage: string = '.complete-header';
    private readonly cartItemCountSelector: string = '.shopping_cart_badge';
    private readonly cartItemNameSelector: string = '.inventory_item_name';
    private readonly removeCartItemButton: string = 'button[data-test="remove-sauce-labs-backpack"]';

    constructor(page: Page) {
        this.page = page;
    }

    public async selectCart() {
        await this.page.locator(this.cartButton).click();
    }

    public async selectCheckout() {
        await this.page.locator(this.checkoutButton).click();
    }

    public async fillInUserInfo(firstName: string, lastName: string, zip: string) {
        await this.page.locator(this.firstNameField).fill(firstName);
        await this.page.locator(this.lastNameField).fill(lastName);
        await this.page.locator(this.zipField).fill(zip);
    }

    public async selectContinue() {
        await this.page.locator(this.continueButton).click();
    }

    public async selectFinish() {
        await this.page.locator(this.finishButton).click();
    }

    public async validateSuccessMessage(expectedMessage: string) {
        const message = await this.page.locator(this.successMessage).textContent();
        if (message !== expectedMessage) {
            throw new Error(`Expected success message to be "${expectedMessage}" but found "${message}"`);
        }
    }

    public async getCartItemCount(): Promise<number> {
        const itemCountText = await this.page.textContent(this.cartItemCountSelector);
        return parseInt(itemCountText || '0', 10);
    }

    public async deleteCartItem(itemName: string) {
       // await this.page.click(`text=${itemName}`);
        await this.page.click(this.removeCartItemButton);
    }

    public async validateCartItemName(itemName: string) {
        const itemNames = await this.page.locator(this.cartItemNameSelector).innerText();
        return itemNames.includes(itemName);
    }
}
