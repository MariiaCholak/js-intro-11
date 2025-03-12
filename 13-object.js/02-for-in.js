const batch = {
    number: 11,
    program: 'SDET',
    numberOfStudent: 20
};

for(const key in batch) {
    console.log(batch[key])
}

const batch = {
    number: 11,
    program: 'SDET',
    numberOfStudents: 20
  };
  
  // for...in loop
  for(const key in batch) {
    console.log(key, batch[key]);
  }
  
  const arr = [ 'Rome', 'Berlin', 'Chicago' ];
  
  for(const key in arr) {
    console.log(key, arr[key]);
  }