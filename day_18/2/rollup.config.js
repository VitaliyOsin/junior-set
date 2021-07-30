import styles from "rollup-plugin-styles";
import image from 'rollup-plugin-img';
import { babel } from '@rollup/plugin-babel';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

export default {
    input: './index.js',
    output: [
        {
        file: 'dist/bundle.js',
        format: 'cjs'
        }
    ],
    watch: true,
    plugins: [
        styles(),
        image({
            limit: 100000
          }),
        babel({ babelHelpers: 'bundled' }),
        serve({
            open: true,
            contentBase: './',
            port: 8000
        }),
        livereload()
    ]
  };