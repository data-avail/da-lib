'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var path = require('path');

module.exports = yeoman.generators.Base.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the fabulous ' + chalk.red('DaLib') + ' generator!'
    ));

    var prompts = [ {
        name: 'projName',
        message: 'What your app\'s name??'
        },
        {
          name: 'moduleName',
          message: 'What your module name??'
        }];

    this.prompt(prompts, function (props) {
      this.props = props;
      this.destinationRoot(path.join(this.destinationRoot(), '/' + this.props.projName));
      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      this.template(
        this.templatePath('_package.json'),
        this.destinationPath('package.json')
      );
      this.template(
        this.templatePath('_readme.md'),
        this.destinationPath('readme.md')
      );            
      this.template(
        this.templatePath('_index.html'),
        this.destinationPath('index.html')
      );                  
      this.template(
        this.templatePath('_index.ts'),
        this.destinationPath('src/index.ts')
      );                        
    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('.editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('.gitignore'),
        this.destinationPath('.gitignore')
      );
      this.fs.copy(
        this.templatePath('.travis.yml'),
        this.destinationPath('.travis.json')
      );
      this.fs.copy(
        this.templatePath('tsconfig.json'),
        this.destinationPath('tsconfig.json')
      );
      this.fs.copy(
        this.templatePath('tsd.json'),
        this.destinationPath('tsd.json')
      );
      this.fs.copy(
        this.templatePath('typedoc.js'),
        this.destinationPath('typedoc.js')
      );
      this.fs.copy(
        this.templatePath('.settings'),
        this.destinationPath('.settings')
      );
      this.fs.copy(
        this.templatePath('typings'),
        this.destinationPath('typings')
      );
      this.fs.copy(
        this.templatePath('test'),
        this.destinationPath('test')
      );      
    }
  },

  install: function () {
    this.npmInstall();
  }
});
