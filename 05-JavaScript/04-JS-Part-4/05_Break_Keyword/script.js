// Use of break to exit loop
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Breaking at", i);
        break;
    }
    console.log(i);
}
// This will print:
// 1
// 2
// 3
// 4
// Breaking at 5
// 5 is not printed because the loop breaks before reaching it
