
it('should be running in test environment',()=>{

    expect(process.env.NODE_ENV).toBe('test');

});