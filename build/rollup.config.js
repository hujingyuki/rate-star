/** @format */

// rollup.config.js
import vue from 'rollup-plugin-vue';
import buble from 'rollup-plugin-buble';
import uglify from 'rollup-plugin-uglify-es';
import minimist from 'minimist';

const argv = minimist(process.argv.slice(2));

const config = {
  input: 'src/index.js',
  output: {
    name: generateName('rate-star'),
    exports: 'named'
  },
  plugins: [
    vue({
      css: true,
      compileTemplate: true
    }),
    buble()
  ],
  targets: [
    { dest: 'dist/rate-star.min.js', format: 'iife' },
    { dest: 'dist/rate-star.umd.js', format: 'umd' },
    { dest: 'dist/rate-star.es.js', format: 'es' }
  ]
};

// Only minify browser (iife) version
if (argv.format === 'iife') {
  config.plugins.push(uglify());
}

function generateName(name){
  return name.replace(/\b[a-z]/g, function(s){return s.toUpperCase()}).replace(/-/g,'')
}

export default config;
