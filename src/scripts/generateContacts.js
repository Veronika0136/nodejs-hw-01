import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const firstData = await readContacts();
    const secondData = Array.from({ length: number }, () =>
      createFakeContact(),
    );
    const contactsData = [...firstData, ...secondData];
    await writeContacts(contactsData);
  } catch (err) {
    console.log(err);
  }
};

generateContacts(5);
