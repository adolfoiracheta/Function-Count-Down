function countDown(i) {
  console.log(i);
  i--;
  if (i > 0) {
    countDown(i);
  }
  
}
countDown(10);
