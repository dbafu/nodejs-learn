<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>{{title}}</title>
  </head>
  <body>
    {{#each files}}
      <a href="{{../dir}}/{{this}}">{{this}}</a>
    {{/each}}
  </body>
</html>
