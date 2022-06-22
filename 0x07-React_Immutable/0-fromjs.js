import { fromJs } from 'inmutable';

function getImmutableObjec(object) {
  const map = fromJS(object);
  return map;
}

export default getImmutableObjec;
