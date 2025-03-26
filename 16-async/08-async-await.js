function connectToServer() {
    return new Promise((resolve, reject) => {
      const bool = false;
      if(bool) {
        console.log('Connection successful!');
        resolve('We are connected!');
      }
      else {
        console.log('Connection failed!');
        reject('ERROR: This connection is failed!!!!');  //// reject need have massage in error and we can catch it
      }
    });
  }
   //// promises comes from labries we only async it or use then catch it's only our part
   /// playwrigth resolved it better for us
  //exsecurte func
  async function test1() {     //// most of the time we don't handle error we let our error show
    try {
      await connectToServer();
    }
    catch(err) {
      console.log(err);
    }
  }
  
  async function test2() {
    connectToServer()
    .then(() => {})
    .catch((err) => console.log(err));
  }
  
  async function runTests() {
    await test1();
    await test2();
  }
  
  runTests();