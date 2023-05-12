export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

/* 
This code exports a function called delay that returns a Promise that 
resolves after a specified number of milliseconds.

Here's what's happening in the code:

    delay is a function that takes a single argument, ms, which is a number 
    representing the number of milliseconds to wait before resolving the promise.
    Inside the delay function, a Promise is created using the Promise constructor.
    The setTimeout function is called, passing a callback function 
    that resolves the promise after ms milliseconds.
    The setTimeout function returns a unique ID that can be used to 
    cancel the timeout before it runs, but this code does not use it.

When you call the delay function and wait for the promise to resolve, 
it will wait for the specified amount of time before resolving with no value. 
This can be useful in situations where you need to pause execution for a certain 
amount of time, for example, to simulate a delay in a network request.
*/