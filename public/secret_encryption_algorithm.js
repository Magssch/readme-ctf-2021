function verySecureEncryptionFunction(input) {
  const arr = input.split("");

  for (let index = 1; index < arr.length; index++) {
    if (index % 3 === 0) {
      arr[index] = String.fromCharCode(arr[index].charCodeAt(0) - 10);
    } else if (index % 2 === 0) {
      arr[index] = String.fromCharCode(arr[index].charCodeAt(0) * 8);
    }
  }
  for (let index = 1; index < arr.length; index++) {
    if (index % 2 === 0) {
      const temp = arr[index - 1];
      arr[index - 1] = arr[index];
      arr[index] = temp;
    }
  }
  console.log(arr);
  return arr.join("");
}
