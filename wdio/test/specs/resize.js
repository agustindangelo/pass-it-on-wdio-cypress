describe('should find an element which is not in the viewport', () => {
  it('should subscribe to the newsletter', async () => {
    browser.url()
    browser.url('http://automationpractice.com/index.php');
    browser.setWindowSize(400, 670);

    const input = await $('#newsletter-input');
    await input.setValue('agustin@gaim.loc');
    await $('button[name="submitNewsletter"]').click();

    const alertSuccess = await $('.alert-success');
    expect(alertSuccess).toBeDisplayed();
    expect(alertSuccess).toHaveTextContaining('You have successfully subscribed to this newsletter');
  })
});