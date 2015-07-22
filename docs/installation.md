**Prerequisites:**

- [node.js](https://nodejs.org/) installed
- (Ideally you have a GitHub account)

**Installation of _Yeoman Generator for Qlik Sense Visualization Extensions_:**

First install [Yeoman](http://yeoman.io/) globally:
```bash
npm install yeoman -g
```

Second install generator-sense-extension:

```bash
npm install generator-sense-extension -g
```
(It is recommended to install the generator globally (**`-g`**), then you can easily use it for multiple projects)

**Run sense-extension generator**

1. Think of a good name for your visualization extension (e.g. "astonishing-chart")
2. Optionally, create a GitHub repository using that name (this will result into https://github.com/YOURNAME/astonishing-chart)
3. Create a directory for your visualization extension (e.g. `mkdir c:\my-extensions\astonishing-chart`)
4. Then switch to the created directory (`cd C:\my-extensions\astonishing-chart`)
5. Run Yeoman generator _sense-extension_ (`yo sense-extension`)
6. Follow the prompts

After answering some questions you're done, a basic structure for your project is created.
