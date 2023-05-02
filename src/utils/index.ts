
export async function getBlockNumberFromTimestamp(timestamp: number) {

    const apikey = process.env.API_KEY;
    let block = await fetch(
        `
        https://api.etherscan.io/api?module=block&action=getblocknobytime&timestamp=${timestamp}&closest=before&apikey=${apikey}
            `
    ).then(resp => resp.json()).then(json => json.result);

    return block;


}
