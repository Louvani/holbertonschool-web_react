import { Map } from 'immutable';

export default function accessImmutableObject(object, array) {
  const map = Map(object);
  const data = map.getIn(array);
  if (typeof data !== 'string') return Map(data);
  return data;
}

const obj = {
  name: {
    first: 'Guillaume',
    last: 'Salva',
  },
}
console.log(accessImmutableObject(obj, ['name'],));
