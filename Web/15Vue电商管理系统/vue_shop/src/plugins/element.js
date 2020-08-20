import Vue from 'vue'
// element-ui按需导入
import {
  Button,
  Breadcrumb,
  BreadcrumbItem,
  MessageBox,
  Dialog,
  Card,
  Pagination,
  Tooltip,
  Switch,
  Table,
  TableColumn,
  Row,
  Col,
  Form,
  FormItem,
  Input,
  Message,
  Container,
  Header,
  Aside,
  Main,
  Menu,
  Tree,
  MenuItem,
  Submenu,
  Tag,
  Select,
  Option,
  Cascader,
  Alert,
  Tabs,
  TabPane,
  Steps,
  Step,
} from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Header)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(Switch)
Vue.use(TableColumn)
Vue.use(Tooltip)
Vue.use(Pagination)
Vue.use(Dialog)
// Vue.use(MessageBox)
Vue.component(MessageBox.name, MessageBox)
Vue.use(Tag)
Vue.use(Tree)
Vue.use(Select)
Vue.use(Cascader)
Vue.use(Option)
Vue.use(Alert)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Steps)
Vue.use(Step)
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm