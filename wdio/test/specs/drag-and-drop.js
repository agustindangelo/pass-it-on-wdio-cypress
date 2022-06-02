describe('drag and drop test', () => {
  it('should drag the first item and drop it to the second position', async () => {

    // drag and drop not working.
    // Functionality depends on the implementation.
    // For the implementation on the demo website it requires a 3-rd party library
    // https://github.com/html-dnd/html-dnd

    browser.url('drag_and_drop');

    columnA = await $('#column-a');
    columnB = await $('#column-b');

    columnALocation = await columnA.getLocation();
    columnBLocation = await columnA.getLocation();

    const offset = {
      x: columnBLocation.x - columnALocation.x,
      y: columnBLocation.y - columnALocation.y,
    } 

    await columnA.dragAndDrop(offset);

    expect(await $('#column-a header')).toHaveText('B');
    expect(await $('#column-b header')).toHaveText('A');
  });
});