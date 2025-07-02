import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const firstData = await readContacts();
    const secondData = createFakeContact();
    const contactsData = [...firstData, secondData];
    await writeContacts(contactsData);
  } catch (err) {
    console.log(err);
  }
};

addOneContact();
