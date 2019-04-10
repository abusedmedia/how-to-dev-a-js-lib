import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'

export default{
  input: 'src/main.js',
  output: {
    file: 'dest/mylib.js',
    format: 'umd',
    name: 'mylib',
    sourcemap: true
  },
  watch: {
    exclude: 'dest/*',
    include: 'src/**'
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**'
    })
  ]

}
