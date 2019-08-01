export default (client) => ({
  getAllCaracters () {
    return client.get('people/')
      .then(({ data }) => {
        return data
      })
  }
})
