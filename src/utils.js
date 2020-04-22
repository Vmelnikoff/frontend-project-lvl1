// ==================== Random integer generator ====================
// Default random integer from 1 to 100
const getRandomInt = (min = 0, max = 100) => Math.floor(min + Math.random() * (max + 1 - min));

const decorate = (string, style) => {
  const output = 'console';
  const styles = {
    red: '31',
    green: '32',
    yellow: '33',
    blue: '34',
    bold: '1',
  };

  if (style in styles && output === 'console') {
    const reset = '\x1b[0m';
    const decor = `\x1b[${styles[style]}m`;

    return `${decor}${string}${reset}`;
  }

  return string;
};

export { getRandomInt, decorate };
