let arr = [10,50,70,90,10,-5,90,50,40,60,50,90,-80];
// let arr =[90,20,10]
let firstLargestElement = Math.min(...arr);
let secondLargestElement = Math.min(...arr);
let thirdLargestElement = Math.min(...arr);
let newArr = [];
let i;

function thirdLargest() {
  for (i = 0; i < arr.length; i++)
    if (arr[i] > firstLargestElement) 
    firstLargestElement = arr[i];
  newArr.push(firstLargestElement);

  for (i = 0; i < arr.length; i++)
    if (arr[i] > secondLargestElement && arr[i] < firstLargestElement)
      secondLargestElement = arr[i];
  newArr.push(secondLargestElement);

  for (i = 0; i < arr.length; i++)
    if (arr[i] > thirdLargestElement && arr[i] < secondLargestElement)
      thirdLargestElement = arr[i];
  newArr.push(thirdLargestElement);
}
thirdLargest();
console.log("Given Array = ", arr);
console.log("Three largest element from given array = ", newArr);
console.log("Third largest element from given array = ", thirdLargestElement);
