export const selectFilter = state => state.contacts.filter;

// export const selectFilter = state => state.filter;
export const getContacts = state => state.contacts.items;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
