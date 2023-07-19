// Импорт основного модуля
import gulp from 'gulp';
// Импорт общих плагинов
import { plugins } from './config/gulp-plugins.js';
// Импорт путей
import { path } from './config/gulp-settings.js';

// Передача значений в глобальную переменную
global.app = {
  isBuild: process.argv.includes('--build'),
  isDev: !process.argv.includes('--build'),
  isWebP: !process.argv.includes('--nowebp'),
  isFontsReW: process.argv.includes('--rewrite'),
  gulp: gulp,
  path: path,
  plugins: plugins,
};

// Импорт задач
import { reset } from './config/gulp-tasks/reset.js';
import { html } from './config/gulp-tasks/html.js';
import { css } from './config/gulp-tasks/css.js';
import { ts } from './config/gulp-tasks/ts.js';
import { tsDev } from './config/gulp-tasks/ts-dev.js';
import { images } from './config/gulp-tasks/images.js';
import { ftp } from './config/gulp-tasks/ftp.js';
import { zip } from './config/gulp-tasks/zip.js';
import { sprite } from './config/gulp-tasks/sprite.js';
import { otfToTtf, ttfToWoff, fontsStyle } from './config/gulp-tasks/fonts.js';

// Последовательная обработка шрифтов
const fonts = gulp.series(reset, otfToTtf, ttfToWoff, fontsStyle);
// Основные задачи выполняются параллельно после обработки шрифтов
const devTasks = gulp.parallel(fonts);
// Основные задачи выполняются параллельно после обработки шрифтов
const buildTasks = gulp.series(fonts, tsDev, ts, gulp.parallel(html, css, images));

// Экспорт задач
export { html };
export { css };
export { ts };
export { tsDev };
export { images };
export { fonts };
export { sprite };
export { ftp };
export { zip };

// Построение сценариев выполнения задач
const development = gulp.series(devTasks);
const build = gulp.series(buildTasks);
const deployFTP = gulp.series(buildTasks, ftp);
const deployZIP = gulp.series(buildTasks, zip);

// Экспорт сценариев
export { development };
export { build };
export { deployFTP };
export { deployZIP };

// Выполнение сценария по умолчанию
gulp.task('default', development);
