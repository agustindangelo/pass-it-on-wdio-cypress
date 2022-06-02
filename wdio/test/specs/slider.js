describe('Slider', () => {
  it('should add 3 units to the slider value', async () => {
    await browser.url('https://the-internet.herokuapp.com/horizontal_slider')

    const slider = await $('input[type="range"]');
    console.log(' ----------------- Slider value ' + await slider.getValue());

    // await slider.dragAndDrop(target) // dragAndDrop method not working
    const previousValue = parseFloat(await slider.getValue())
    const step = parseFloat(await slider.getAttribute('step'))

    const newValue = previousValue + 3 * step;
    console.log(' ----------------- new value ' + newValue);
    await slider.setValue(newValue);

    console.log(' ----------------- Slider value ' + await slider.getValue());
    await expect(await slider.getValue()).toBe(newValue)
    // slider.setValue not working as expected
  });
});