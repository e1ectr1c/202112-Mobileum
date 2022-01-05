const {PrimeStream}=require('../utils/prime-stream');
const {createMapStream} = require('../utils/map-stream');

const ps= new PrimeStream(2,100);

ps
.pipe(createMapStream(info=>`${info.prime}\t`))
.pipe(process.stdout);