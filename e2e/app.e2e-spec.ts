import { AppPage } from './app.po';

describe('Global e2e App', () => {
	let page: AppPage;

	describe('home page', () => {
		beforeEach(() => {
			page = new AppPage();
			page.navigateTo();
		});

		it('should display the dropdown form', () => {
			const form = page.getForm();
			const select = page.getFormSelect();
			const options = page.getFormSelectOptions();

			expect(form.isElementPresent(select)).toBeTruthy();
			expect(options.count).toBe(3);
		});
	});
});
