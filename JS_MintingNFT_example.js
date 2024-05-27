const newNft = [];

function mintNFT (name, idNumber, pNumber, city) {
    const NFTminter = {
        "Name" : name,
        "ID": idNumber,
        "Phone_Number": pNumber,
        "City": city
    }
    newNft.push(NFTminter);
console.log(name + " is minted");
}

function listNFTs () {
    let i = 0;
    while(i < newNft.length){
        let a = i+1;
        console.log("Metadata of NFT Number " +a);
        console.log(newNft[i]);
        i++;
    }

}

function getTotalSupply() {
    console.log("Number of Minted NFT are " + newNft.length)

}

mintNFT("Jimmy","10104","9029405385","New York");
mintNFT("William","10106","9922325385","London");
mintNFT("Jimmy","10104","8493265385","Paris");

listNFTs();
getTotalSupply();

