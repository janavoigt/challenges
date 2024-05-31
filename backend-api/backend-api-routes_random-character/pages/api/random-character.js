const character = {
  firstName: chance.first(),
  lastName: chance.last(),
  age: chance.age(),
  hobby: chance.hobby(),

  // ... some more keys here ...
};

export default function handler(req, res) {
  res.status(200).json(character);
}
