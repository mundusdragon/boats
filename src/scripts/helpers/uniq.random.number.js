const uniqRandomNumber = () => parseInt(`${ Date.now().toString()}${ ( Math.random() * 10 ).toFixed( 0 ) } `)
export default uniqRandomNumber;