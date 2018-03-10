import path from 'path'

export default function doStuff () {
  console.log('A path:', path.join(__dirname, 'cats.hat'))
}
