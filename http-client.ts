const res = await fetch("https://httpbin.org/get", { method: "GET" });
console.log(await res.json());
