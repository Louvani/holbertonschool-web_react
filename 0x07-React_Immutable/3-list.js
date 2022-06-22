import { List } from 'immutable';

export function addElementToList(list, element) {
  return list.push(element);
}

export function getListObject(array) {
  return List(array);
}
