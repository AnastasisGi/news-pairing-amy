describe('headlines', () => {
  let headlines, element, client;
  beforeEach(() => {
    element = {}
    client = {
      get: () => Promise.resolve(data)
    }
  })
  it('renders the web title on page', async () => {
    headlines = await new Headlines(element, client)
    expect(headlines.element.innerHTML).toContain("Ethiopia: reports of heavy casualties in fighting in Tigray")
  })
  it('renders the title with the link', async () => {
    headlines = await new Headlines(element, client)
    expect(headlines.element.innerHTML).toEqual('<p><a href="https://www.theguardian.com/world/2020/nov/08/ethiopia-reports-of-heavy-casualties-in-fighting-in-tigray">Ethiopia: reports of heavy casualties in fighting in Tigray</a></p>')
  })
})

