# Welcome to Joya-cli!

This is a CLI to help you creating some **React files** in a quick and easy way.
This has been developed to **make faster some repetitive elements creation** in our daily basis.

### Installation
Just run in your terminal:
```
 yarn global add joya-cli
```
```
 npm install -g joya-cli
```
This is going to install joya-cli **globally** in your machine. It will allows you to use the CLI wherever you want.
### Options

Let's check te options you have to create those elements:


```
 joya [type] [name] [language]
```


|type         |            name                          |language (optional)                         |
|----------------|-------------------------------|-----------------------------|
|component|*string*            |ts           |
|class-component          |            |js            |
|page          |||
|context          |||
|test          |||
|api          |||

> Language default value is **ts (TypeScript)**

> **Api** options **needs a name**, but it is **not going to be use** in creation

### Examples

```
 joya component welcome ts
```
```
 joya test input js
```

```
 joya page settings
```
