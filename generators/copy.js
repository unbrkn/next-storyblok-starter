const fs = require('fs')
const path = require('path')
const replace = require('./replace')
const componentName = process.argv[process.argv.length - 1]

fs.copyFileSync(path.join('generators', 'componentTemplate.js'), path.join('components', `${componentName}.js`), fs.constants.COPYFILE_EXCL)

console.log('')
console.log(`${componentName}.js has been created in components/`)

replace(path.join('pages', '_app.js'), {
  '// this comment line is used by the generator in generators/copy.js': `import ${componentName} from './${componentName}'\n// this comment line is used by the generator in generators/copy.js`,
  'components: {': `components: {\n  '${componentName}': ${componentName},`
})

console.log(`${componentName} added to _app.js`)
console.log('')
