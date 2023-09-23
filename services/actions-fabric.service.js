class Action {
  constructor(type, payload) {
    this.type = type;
    this.payload = payload;
  }
}

export default class ActionsFabricService {
  createAction(type, payload) {
    return new Action(type, payload);
  }

  createListItemClickAction(payload) {
    return this.createAction('listItemClick', payload);
  }
}
