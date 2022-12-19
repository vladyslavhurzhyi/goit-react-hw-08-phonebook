export const getDataFromLS = (LOKAL_STORAGE) => {
    const savedContacts = localStorage.getItem(LOKAL_STORAGE);
    if (savedContacts !== null) {
        const parsedContacts = JSON.parse(savedContacts);
        return parsedContacts;
    }
    return [];
};