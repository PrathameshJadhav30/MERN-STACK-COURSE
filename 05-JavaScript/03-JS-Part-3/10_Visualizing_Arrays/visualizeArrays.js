let marks = [90, 85, 78];
marks.forEach((mark, index) => {
  console.log(`Index ${index}: ${mark}`);
});
console.log("Total Marks:", marks.reduce((acc, mark) => acc + mark, 0));
console.log("Average Marks:", marks.reduce((acc, mark) => acc + mark, 0) / marks.length);