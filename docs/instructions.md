# Список команд по созданию проектов и установки библиотек

Создание проекта React (в настройках выберите опции React затем VanillaJS):
**npm create vite@latest react-app**

Создание проекта React + TS (в настройках выберите опции React затем TypeScript):
**npm create vite@latest my-react-ts-app**

Создание проекта React + TS + Redux:
**npx degit reduxjs/redux-templates/packages/vite-template-redux . --force**

Установка node modules:
**npm install**

Установка библиотеки uuid:
**npm install uuid**

Установка типов для библиотеки uuid:
**npm install @types/uuid**

Установка библиотеки yup:
**npm install yup**

Установка библиотеки formik:
**npm install formik**

Установка библиотеки react-router-dom:
**npm install react-router-dom**

Установка библиотеки emotion-react:
**npm install --save @emotion/react**

Установка библиотеки emotion-styled:
**npm install --save @emotion/styled**

Установка библиотеки axios:
**npm install axios**

## Настройка путей относительно src

Установите пакет:
**npm install @types/node**

Добавьте настройку в tsconfig.json:
**"baseUrl": "./src",**

Добавьте импорт в vite.config.ts:
**import path from 'path';**

Добавьте настройку в defineConfig файла vite.config.ts:
resolve: { alias: { 'assets': path.resolve(__dirname, 'src/assets'), 'components': path.resolve(__dirname, 'src/components'), 'homeworks': path.resolve(__dirname, 'src/homeworks'), 'lessons': path.resolve(__dirname, 'src/lessons'), 'pages': path.resolve(__dirname, 'src/pages'), 'consultations': path.resolve(__dirname, 'src/consultations'), 'styles': path.resolve(__dirname, 'src/styles') } },