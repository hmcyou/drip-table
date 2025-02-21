<a href='http://drip-table.jd.com/'>
  <h1 style="display: flex; align-items: center; justify-content: center">
    <img src='https://storage.360buyimg.com/imgtools/7e0e546a96-d962c880-f9a2-11eb-bf08-d585041b7c80.svg'/>
    <span style="margin-left: 10px">Drip Table</span>
  </h1>
</a>

English | [简体中文](./README.zh-CN.md) | [Documentation](http://drip-table.jd.com/) | [Discussions](https://github.com/JDFED/drip-table/discussions)｜[Gitter](https://gitter.im/drip-table/community) | [Official Wechat group](./Contact.md)

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[contributors]: https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square "Number of contributors on All-Contributors"

<!-- ALL-CONTRIBUTORS-BADGE:END -->

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![npm version](https://img.shields.io/npm/v/drip-table.svg?style=flat)](https://www.npmjs.com/package/drip-table)
![node](https://img.shields.io/badge/node-%3E%3D13.14.0-blue.svg)
![yarn](https://img.shields.io/badge/yarn-%3E%3D1.0.0-blue.svg)
![document](https://img.shields.io/badge/documentation-yes-brightgreen.svg)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)
[![All Contributors][contributors]](./CONTRIBUTORS.md)

## 📖 Introduction

`Drip Table`is a dynamic table solution for enterprise level middle and background launched by JD retail. The project is based on `React` and `JSON Schema` . It aims to reduce the difficulty of developing table and improve work efficiency by `simple configuration` to quickly generate page dynamic table.

`Drip Table` contains serval sub projects: `drip-table`, `drip-table-generator`.

The introduction of each sub-project are as follows:

- `drip-table`: the core library of the solution for building dynamic tables. It's main ability is to render a dynamic table automatically when received data which conforms to the `JSON Schema` standard.

- `drip-table-generator`: a visual tool for producing configuration data that meets the `JSON Schema` standard in order to sent to `DripTable` for rendering a table and columns.

## Features

* [x] Basic table
* [x] Compound table
* [x] Toolbar
* [x] Renderer
* [x] Text component
* [x] Number component
* [x] Image component
* [x] Link component
* [x] Tag component
* [x] Button component
* [x] Select component
* [x] DataPicker component
* [x] PopUpPage component
* [x] RichText component
* [x] Group component
* [x] Custom component
* [x] Header slot
* [x] Footer slot
* [x] Pagination
* [x] Virtual list
* [x] Sticky
* [x] Sub table
* [x] Row selection
* [x] Row draggable
* [x] Fixed column
* [x] Show/Hide column
* [x] Edit data
* [x] Stripe
* [x] Table with border
* [x] Column resizing
* [x] Size
* [x] Global styles
* [x] Empty table prompt
* [x] Loading
* [x] Card layout
* [x] Filter

## ⬆️ Getting Start

`Drip table` is divided into two application scenarios: configuration end and application end. The configuration side is mainly responsible for generating `JSON Schema` standard data through visualization and `low-code`. The function of the application side is to render the `JSON Schema` standard configuration data into a dynamic table.

### The configuration side

1. Install dependencies

   The configuration side depend on the application side, please make sure that `drip-table` has been installed before installing dependencies.

   > yarn

   ```sh
   yarn add drip-table-generator
   ```

   > npm

   ```sh
   npm install --save drip-table-generator
   ```

2. Import at the entrance of a file

   ```js | pure
   import DripTableGenerator from "drip-table-generator";
   import "drip-table-generator/dist/index.min.css";
   ```

3. Use components in pages

   ```js | pure
   return <DripTableGenerator />;
   ```

   Then the configuration side can be rendered normally, as the sample screenshot below:

   ![drip-table-generator](https://img10.360buyimg.com/imagetools/jfs/t1/83544/7/17486/359800/63620e25Ed7185bc1/caf5173d381cb4c0.png)

### The application side

1. Install dependencies

   Install the `drip-table`:

   > yarn

   ```sh
   yarn add drip-table
   ```

   > npm

   ```sh
   npm install --save drip-table
   ```

2. Import at the entrance of a file

   ```js
   // import drip-table
   import DripTable from "drip-table";
   // import drip-table css
   import "drip-table/dist/index.min.css";
   ```

3. Use components in pages

   ```js
   const schema = {
     size: "middle",
     columns: [
       {
         key: "columnKey",
         title: "Column Title",
         dataIndex: "dataIndexName",
         component: "text",
         options: {
           mode: "single",
         },
       },
     ],
   };
   return (
     <DripTable
       schema={schema}
       dataSource={[]}
     />
   );
   ```

   Then the application side can be rendered normally, as the sample screenshot below:

   ![drip-table-demo](https://img13.360buyimg.com/imagetools/jfs/t1/136130/29/29966/659037/6363944fEd6a71fa1/2bec620460de4f3c.png)

## 🤝 Contribution

If you're interested in this project, you're welcome to create ✨[issue](https://github.com/JDFED/drip-table/issues). We are appreciated for your ❤️[star](https://github.com/JDFED/drip-table).

### development

1. Clone

   ```sh
   git clone https://github.com/JDFED/drip-table.git
   ```

2. Install dependencies

   ```sh
   lerna bootstrap
   ```

3. build independecies

   > yarn

   ```sh
   yarn run build
   ```

   > npm

   ```sh
   npm run build
   ```

4. Run project

   ```sh
   yarn start
   ```

- visit http://localhost:8000
- `drip-table` demo page: /drip-table/guide/basic-demo
- `drip-table-generator` demo page: /drip-table-generator/demo

For more commands, see [DEVELOP](./DEVELOP.md) .
Please visit the official website address [drip-table](http://drip-table.jd.com/) 。

## Communication

[Official Wechat group](./Contact.md)

## License

[MIT License](./LICENSE)
