const db = 'db_week4';
const collection = 'account';

const importData = async (client) => {
  try {
    await client.connect();
    await client.db('db_week4').collection('account').deleteMany();
    await client.db('db_week4').collection('account').insertMany(accounts);
    console.log('Accounts data imported successfully');
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
};

const accounts = [
  {
    account_number: 101,
    balance: 1000,
    account_changes: [
      {
        change_number: 1,
        amount: 740,
        changed_date: '2020-10-10',
        remark: 'expenses',
      },
      {
        change_number: 2,
        amount: 90,
        changed_date: '2020-10-09',
        remark: 'expenses',
      },
    ],
  },
  {
    account_number: 102,
    balance: 5000,
    account_changes: [
      {
        change_number: 1,
        amount: 1740,
        changed_date: '2020-03-10',
        remark: 'expenses',
      },
    ],
  },
  {
    account_number: 103,
    balance: 4000,
    account_changes: [
      {
        change_number: 1,
        amount: 150,
        changed_date: '2022-7-1',
        remark: 'expenses',
      },
      {
        change_number: 2,
        amount: 900,
        changed_date: '2022-10-14',
        remark: 'expenses',
      },
    ],
  },
];

module.exports = { importData };
