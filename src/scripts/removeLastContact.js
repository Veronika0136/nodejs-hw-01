import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const fitstContacts = await readContacts();
    const lastContact = fitstContacts.pop();
    const newContacts = fitstContacts.filter(
      (contact) => contact !== lastContact,
    );

    await writeContacts(newContacts);
  } catch (err) {
    console.log(err);
  }
};

removeLastContact();
