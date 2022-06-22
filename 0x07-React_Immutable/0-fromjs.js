import { fromJs } from 'inmutable';

function getImmutableObjec(object) {
  const map = fromJS(object);
  return map;
}

const test = {
  fear: true,
  smell: -1033575916.9145899,
  wall: false,
  thing: -914767132
}
console.log(getImmutableObjec(test));
export default getImmutableObjec;
