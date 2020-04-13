// ==================== Random integer generator ====================
// Default random integer from 1 to 100
const getRandomInt = (max = 100, min = 0) => Math.floor(min + Math.random() * (max + 1 - min));

export default getRandomInt;
