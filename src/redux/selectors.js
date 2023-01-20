
export const selectContacts = state => state.contact.contacts;

export const selectFilterValue = state => state.filter;


export const selectFilteredContacts = state => {
    const {items} = selectContacts(state);
    const filter = selectFilterValue(state);

     if (items) {
      return items.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase())
      );
    }
}
