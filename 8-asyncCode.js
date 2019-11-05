/**
 * Nodejs is single threaded and asyn like the browaer, but you'll probably do more async things
 *  - Unlike the browser, your nodejs app will be shared by all clients
 *  - You now have consider CPU intensive tasks that block the single thread (while loops)
 * Async Patterns
 *  - CallBack Pattern
 *    ```doAsyncThing((err, result) => {})```
 *  - Promises Pattern
 *    ```doAsyncThing()
 *        .then(result => {})
 *        .then(errotr=> {})
 *    ```
 *   - Async / Await
 *    ```const run = async () => {
 *        const results = await doAsyncThing()
 *        console.log('hello')
 *        }
 *    ```
 */

//CallBack Pattern
doAsyncThing((err, result) => {})
/// Promises Pattern
doAsyncThing()
  .then(result => {})
  .then(errotr=> {})

// Async / Await
const run = async () => {
  const results = await doAsyncThing()
  console.log('hello')
}
