## egg 错误集合

### 插件开发 can't override 'xx.js' from 'xx.js'
-  使用了app作为test
```js
import mm from '@ali/mm';
const assert = require('assert');

describe('test/service/user.test.ts', () => {
  let app;
  before(() => {
    app = mm.app({
      baseDir: 'empty-app',
    });
    return app.ready();
  });
  after(() => app.close());
```
    
