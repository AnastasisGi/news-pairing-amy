describe('headlines', () => {
  let headlines, element, client;
  beforeEach(() => {
    element = {}
    client = {
      get: () => Promise.resolve(data)
    }
  })
​
  it('renders on page', async () => {
    headlines = await new Headlines(element, client)
    expect(headlines.element.innerHTML).toEqual("<p>Ethiopia: reports of heavy casualties in fighting in Tigray</p>")
  })
})
​
