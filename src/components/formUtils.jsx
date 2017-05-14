export const verifyName = (name) => {
  return name.replace(/ /g, '').length > 0;
}

export const verifyHobbies = (hobbies) => {
  return hobbies.length > 0;
}