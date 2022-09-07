export const FilteredNames = ({ contacts, filter }) => {
  const normalizedFilter = filter.toLowerCase();
  const result = contacts.filter(({ name }) => {
    const normalized = name.toLowerCase();
    return normalized.includes(normalizedFilter);
  });

  return result;
};
