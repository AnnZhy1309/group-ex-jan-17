let data = [
  8, 79, 14, 94, 33, 31, 2, 74, 46, 72, 75, 40, 5, 1, 48, 81, 99, 4, 43, 68, 90,
  23, 97, 10, 55, 11, 20, 50, 70, 83, 47, 25, 86, 30, 60, 96, 76, 22, 67, 77,
];


function doSort(data){
  data.sort((a,b)=>a-b);
  console.log(data);
}
doSort(data);

function getTotal(arr){
  var total=0;
  for(let i=0; i < arr.length; i=i+1){
  total=total+arr[i];
  }
  console.log(total);
  return total;
}
getTotal(data);