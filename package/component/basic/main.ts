// form内部集成组件
import FormItemDes from './form/component/form-item-des/index.vue';
// 内部组件
import Button from './button/index.vue';
import Select from './select/index.vue';
import Cascader from './cascader/index.vue';
import Form from './form/index.vue';
import Table from './table/index.vue';
import Modal from './modal/index.vue';
import Drawer from './drawer/index.vue';
import Upload from './upload/index.vue';

const COMPONENTS = {
  // form内部集成组件
  FormItemDes,
  // 内部组件
  Button,
  Select,
  Cascader,
  Form,
  Table,
  Modal,
  Drawer,
  Upload
};

// 导出全部组件
export { COMPONENTS };
