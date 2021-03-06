import { createAction } from '@reduxjs/toolkit';

const contactsAdd = createAction('contacts/add');
const contactsDelete = createAction('contacts/delete');
const contactsFilter = createAction('contacts/filter');

export default { contactsAdd, contactsDelete, contactsFilter };
