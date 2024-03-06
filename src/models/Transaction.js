const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  transactionHash: { type: String, required: true, unique: true },
  blockNumber: { type: Number, required: true },
  timestamp: { type: Number, required: true },
  from: { type: String, required: true },
  to: { type: String, required: true },
  value: { type: String, required: true },
  tokenName: { type: String, required: true },
  tokenSymbol: { type: String, required: true },
  tokenDecimal: { type: Number, required: true },
  gas: { type: Number, required: true },
  gasPrice: { type: String, required: true },
  gasUsed: { type: Number, required: true },
  feeInEth: { type: String, required: true },
  feeInUsdt: { type: Number, required: true },
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;