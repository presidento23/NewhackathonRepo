const {
  XrpPayIdClient,
  TransactionStatus,
  WalletFactory,
  XrpClient,
  XrplNetwork,
  XpringClient,
} = require("xpring-js");

function createRandomWallet() {
  // declares a new instance of the wallet factor class with the testnetwork and then
  //calls a generate wallet function which returns a tuple

  const generationResult = new WalletFactory(
    XrplNetwork.Test
  ).generateRandomWallet();
  const newWallet = generationResult.wallet;
  return newWallet;
}

// The expected address of the gRPC server.
const grpcUrl = "test.xrp.xpring.io:50051";
// *param*(network) =The network to resolve on.

const network = XrplNetwork.Test;

//*param*(wallet) = A wallet with funds on testnet.
// *param*(dropsToSend) = The number of drops to send.
//*param*(payid) = The PayID to resolve.

async function sendPayment(wallet, dropsToSend, payId) {
  console.log("\nUsing rippled node located at: " + grpcUrl + "\n");
  const xrpClient = new XrpClient(grpcUrl, network);

  console.log("Using network: " + networkToString(network) + "\n");
  const payIdClient = new XrpPayIdClient(network);

  const xpringClient = new XpringClient(payIdClient, xrpClient);

  console.log("Sending:");
  console.log("- Drops " + dropsToSend);
  console.log("- To: " + payId);
  console.log("- From: " + wallet.getAddress() + "\n");
  const hash = await xpringClient.send(dropsToSend, payId, wallet);

  console.log("Hash for transaction:\n" + hash + "\n");

  const status = await xrpClient.getPaymentStatus(hash);

  // Exit with an error code if there is an error.
  process.on("unhandledRejection", (error) => {
    console.log(`Fatal: ${error}`);
    process.exit(1);
  });

  return statusCodeToString(status);
}

function networkToString(network) {
  switch (network) {
    case XrplNetwork.Dev:
      return "Devnet";
    case XrplNetwork.Test:
      return "Testnet";
    case XrplNetwork.Main:
      return "Mainnet";
    default:
      return "Unknown Network";
  }
}

function statusCodeToString(status) {
  switch (status) {
    case TransactionStatus.Succeeded:
      return "SUCCEEDED";
    case TransactionStatus.Failed:
      return "FAILED";
    case TransactionStatus.Pending:
      return "PENDING";
    case TransactionStatus.Unknown:
    default:
      return "UNKNOWN";
  }
}

export default { createRandomWallet, sendPayment };
