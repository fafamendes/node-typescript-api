describe('Post functional tests', () => {
  it('should return a post', async () => {
    const { body, status } = await global.testRequest.get('/post')
    expect(status).toBe(200);
    expect(body).toEqual([
      {
        id: 1,
        msg: 'Olá'
      }
    ])
  })
})