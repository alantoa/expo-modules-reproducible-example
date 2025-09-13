import { registerWebModule, NativeModule } from 'expo';

import { MyModuleEvents } from './MyModule.types';

class MyModule extends NativeModule<MyModuleEvents> {
  PI = Math.PI;
  async setValueAsync(value: string): Promise<void> {
    this.emit('onChange', { value });
  }
  hello() {
    return 'Hello world! 👋';
  }
}

export default registerWebModule(MyModule, 'MyModule');
