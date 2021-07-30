import { babel } from '@rollup/plugin-babel';
import styles from "rollup-plugin-styles";
import image from 'rollup-plugin-img';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

export default {
    input: 'src/index.js',
    output: {
      file: 'build/bundle.js',
      format: 'cjs'
    },
    plugins: [
        babel(
            { 
                babelHelpers: 'bundled' 
            }
            ),
        styles(),
        image({
            limit: 10000
          }),
        serve({
            open: true,
            contentBase: './',
            port: 8000
        }),
        livereload()
        
    ]
  };