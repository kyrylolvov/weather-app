const degToCompass = (num: number) => {
  const val = Math.floor((num / 45) + 0.5);
  const arr = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  return arr[(val % 8)];
};

export default degToCompass;
