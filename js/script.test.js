const { test, expect } = require('@jest/globals')
const passwordCheck = require('./script')

test('similar password check', () => {
    const pass1 = 'password123123'
    const pass2 = 'password123123'
    expect(passwordCheck(pass1, pass2)).toBe(true)
    
})
test('non similar password check', () => {
    const pass1 = '321321password'
    const pass2 = 'password123123'
    expect(passwordCheck(pass1, pass2)).toBe(false)
    
})
