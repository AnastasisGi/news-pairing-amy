class Headlines {
  constructor(element, client) {
    console.log("headlines class is instantiated");
    this.element = element
    console.log(client)
    this.client = client
    this.setup()
  }

  setup() {
    this.client.get("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?q=Ethiopia")
      .then(data => {
        console.log("client", this.client);
        console.log("gets callback");
        console.log("data", data);
        this.items = data.response.results
        this.render()
        // this.element.innerHTML = data.response.results.map(item => `<p>${item.webTitle}</p>`).join('')
      })
  }

  render() {
    console.log("render function is called");
    this.element.innerHTML = this.items.map(item => `<p><img src="${item.picture}"><a href="${item.webUrl}">${item.webTitle}</a></p>`).join('')
  }

}
