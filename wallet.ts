interface RequestArguments {
  method: string;
  params?: unknown;
  [key: string]: unknown;
}

async function request(args: RequestArguments) {
  const id = 0;
  const url = "https://ropsten.infura.io/v3/bd35010d62134981a9e82dff4708728b";
  const body = JSON.stringify(
    { jsonrpc: "2.0", id, method: args.method, params: args.params },
  );
  const res = await fetch(url, { method: "POST", body });

  return res.json();
}

console.log(await request({ method: "eth_blockNumber" }));
