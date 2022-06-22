export default function accessImmutableObject(object, array) {
  const map = Map(object);
  const data = map.getIn(array);
  if (typeof data !== 'string') return Map(data);
  return data;
}

console.log(
  accessImmutableObject(
    {
      name: {
        first: 'Guillaume',
        last: 'Salva',
      },
    },
    ['name'],
  ),
);
