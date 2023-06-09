export const getContacts = state => state.contacts.items;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
export const getStatusFilter = state => state.filter;
export const getUserLogin = state => state.contacts.isLogin;
export const getUser = state => state.contacts.currentUser;
export const getFilteredContacts = state => state.contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(state.filter.toLowerCase()));