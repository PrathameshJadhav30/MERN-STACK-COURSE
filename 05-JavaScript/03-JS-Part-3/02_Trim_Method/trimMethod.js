let msg = "   Hello JS!   ";
console.log("Before Trim:", msg);
console.log("After Trim:", msg.trim());
console.log("Trimmed Length:", msg.trim().length);
console.log("Trimmed and Uppercase:", msg.trim().toUpperCase());
console.log("Trimmed and Lowercase:", msg.trim().toLowerCase());
console.log("Trimmed and Replaced 'JS' with 'JavaScript':", msg.trim().replace("JS", "JavaScript"));
console.log("Trimmed and Split by ' ':", msg.trim().split(' '));