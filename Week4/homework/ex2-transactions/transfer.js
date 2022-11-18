async function transferMoney(
  client,
  senderAccount,
  receiverAccount,
  amount,
  remark,
) {
  const accountsCollection = await client.db('db_week4').collection('account');
  const session = client.startSession();
  const transactionOptions = {
    readPreference: 'primary',
    readConcern: { level: 'local' },
    writeConcern: { w: 'majority' },
  };

  try {
    const transactionResult = await session.withTransaction(async () => {
      const accountUpdateSender = await accountsCollection.updateOne(
        { account_number: senderAccount },
        {
          $inc: { balance: -amount },
          $push: {
            account_changes: {
              change_number: { $size: '$account_changes' },
              amount: -amount,
              changed_date: new Date(),
              remark: remark,
            },
          },
        },
        { session },
      );
      console.log(
        `${accountUpdateSender.matchedCount} document found in the accounts collection with the account number ${senderAccount}`,
      );

      const accountUpdateReceiver = await accountsCollection.updateOne(
        { account_number: receiverAccount },
        {
          $inc: { balance: +amount },
          $push: {
            account_changes: {
              change_number: { $size: '$account_changes' },
              amount: amount,
              changed_date: new Date(),
              remark: remark,
            },
          },
        },
        { session },
      );
      console.log(
        `${accountUpdateReceiver.matchedCount} document found in the accounts collection with the account number ${receiverAccount}`,
      );
    }, transactionOptions);

    if (transactionResult) {
      console.log('the transaction was successfully done');
    } else {
      await session.abortTransaction();
      console.log('the transaction was intentionally aborted');
    }
  } catch (error) {
    console.log(
      'the transaction was aborted due to an unexpected error:' + error,
    );
  } finally {
    await session.endSession();
  }
}

module.exports = {
  transferMoney,
};
