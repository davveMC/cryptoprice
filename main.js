console.log("HELLO WORLD")

crypto_wallet = ""
urls = {
    "twominers":`https://2miners.com/api/accounts/${crypto_wallet}`,
    "etherprice":"https://api.coingecko.com/api/v3/coins/markets?vs_currency=sek&ids=ethereum"
}

// Functions
function api(url){
    req = new Request(url)
    data = await req.loadJSON()
    return data
}

// Variables
etherum_price = api(urls.etherprice)[0].current_price / 1000000
// miner values
miner_data = api(urls.twominers)
luck = miner_data.currentluck
workes = Object.keys(miner_data.workers)
unpaid_balance = miner_data.stats.balance / 1000000000
paid_balance = miner_data.stats.paid / 1000000000

workers = workers.map(w=>{
    mhps = data.workers[w].rhr / 1000000
    return `${w}: ${mhps}`
})

// Widget Settings
var widget = new ListWidget()

workers.forEach(worker => {
    text = widget.addText(worker)
    mhps = miner_data.workers[worker].rhr / 1000000
    c = mhps <= 0 ? "f00" : "0f0"
    text.textColor = new Color(c)
});

unpaid_text = widget.addText(`Unpaid Balance: ${unpaid_balance.toFixed(5)} ETH | ${(unpaid_balance * ethereum_price).toFixed(2)} SEK`)
unpaid_text = widget.textColor(new Color())

// Render Widget
Script.setWidget(widget)
Script.complete()
widget.presentMedium()
