import ReactIcon from '../assets/svg/devicon-master/icons/react/react-original.svg'
import NodeIcon from '../assets/svg/devicon-master/icons/nodejs/nodejs-original.svg'
import BalsamiqIcon from '../assets/svg/devicon-custom/balsamiq-original.svg'
import SketchIcon from '../assets/svg/devicon-master/icons/sketch/sketch-original.svg'
import AwsIcon from '../assets/svg/devicon-master/icons/amazonwebservices/amazonwebservices-original.svg'
import MySQLIcon from '../assets/svg/devicon-master/icons/mysql/mysql-original.svg'
import PostgreSQLIcon from '../assets/svg/devicon-master/icons/postgresql/postgresql-original.svg'
import MongoDBIcon from '../assets/svg/devicon-master/icons/mongodb/mongodb-original.svg'
import PythonIcon from '../assets/svg/devicon-master/icons/python/python-original.svg'
import RubyIcon from '../assets/svg/devicon-master/icons/ruby/ruby-original.svg'
import RailsIcon from '../assets/svg/devicon-master/icons/rails/rails-plain.svg'
import SwiftIcon from '../assets/svg/devicon-master/icons/swift/swift-original.svg'
import AppleIcon from '../assets/svg/devicon-master/icons/apple/apple-original.svg'
import VueIcon from '../assets/svg/devicon-master/icons/vuejs/vuejs-original.svg'
import TypescriptIcon from '../assets/svg/devicon-master/icons/typescript/typescript-original.svg'
import Es6Icon from '../assets/svg/devicon-custom/es6-original.svg'
import FirebaseIcon from '../assets/svg/devicon-custom/firebase-original.svg'
import JavaIcon from '../assets/svg/devicon-master/icons/java/java-original.svg'
import HTML5Icon from '../assets/svg/devicon-master/icons/html5/html5-original.svg'
import CSS3Icon from '../assets/svg/devicon-master/icons/css3/css3-original.svg'
import SassIcon from '../assets/svg/devicon-master/icons/sass/sass-original.svg'
import BootstrapIcon from '../assets/svg/devicon-master/icons/bootstrap/bootstrap-plain.svg'
import GatsbyIcon from '../assets/svg/devicon-custom/gatsby-original.svg'
import GraphQLIcon from '../assets/svg/devicon-custom/graphql-original.svg'
import AzureIcon from '../assets/svg/devicon-custom/azure-original.svg'
import JQueryIcon from '../assets/svg/devicon-master/icons/jquery/jquery-original.svg'
import KubernetesIcon from '../assets/svg/devicon-custom/kubernetes-original.svg'
import DockerIcon from '../assets/svg/devicon-master/icons/docker/docker-original.svg'
import CSharpIcon from '../assets/svg/devicon-master/icons/csharp/csharp-original.svg'
import AndroidIcon from '../assets/svg/devicon-master/icons/android/android-original.svg'
import SciKitIcon from '../assets/svg/devicon-custom/scikit-original.svg'
import MaterialUIIcon from '../assets/svg/devicon-custom/materialui-original.svg'
import JavascriptIcon from '../assets/svg/devicon-master/icons/javascript/javascript-original.svg'
import ReactNativeIcon from '../assets/svg/devicon-custom/reactnative-original.svg'
import DotNetIcon from '../assets/svg/devicon-custom/dotnet-original.svg'
import MatlabIcon from '../assets/svg/devicon-custom/matlab-original.svg'
import ExcelIcon from '../assets/svg/devicon-custom/excel-original.svg'

export const technologyIcons: any = {
  Javascript: { icon: JavascriptIcon, link: 'https://www.javascript.com/' },
  ES6: { icon: Es6Icon, link: 'https://en.wikipedia.org/wiki/ECMAScript' },
  Typescript: { icon: TypescriptIcon, link: 'https://www.typescriptlang.org' },
  React: { icon: ReactIcon, link: 'https://reactjs.org/' },
  'React Native': {
    icon: ReactNativeIcon,
    link: 'https://facebook.github.io/react-native/',
  },
  Vue: { icon: VueIcon, link: 'https://vuejs.org/' },
  Gatsby: { icon: GatsbyIcon, link: 'https://www.gatsbyjs.org/' },
  Node: { icon: NodeIcon, link: 'https://nodejs.org/en/' },
  'Objective-C': {
    icon: AppleIcon,
    link: 'https://en.wikipedia.org/wiki/Objective-C',
  },
  Swift: { icon: SwiftIcon, link: 'https://developer.apple.com/swift/' },
  Java: {
    icon: JavaIcon,
    link: 'https://en.wikipedia.org/wiki/Java_(programming_language)',
  },
  Android: { icon: AndroidIcon, link: 'https://developer.android.com/' },
  Ruby: { icon: RubyIcon, link: 'https://www.ruby-lang.org/en/' },
  Rails: { icon: RailsIcon, link: 'https://rubyonrails.org/' },
  'C#': {
    icon: CSharpIcon,
    link: 'https://en.wikipedia.org/wiki/C_Sharp_(programming_language)',
  },
  '.NET': {
    icon: DotNetIcon,
    link: 'https://dotnet.microsoft.com/',
  },
  Python: { icon: PythonIcon, link: 'https://www.python.org/' },
  SciKit: { icon: SciKitIcon, link: 'https://scikit-learn.org/stable/' },
  Sketch: { icon: SketchIcon, link: 'https://www.sketch.com/' },
  Balsamiq: { icon: BalsamiqIcon, link: 'https://balsamiq.com/' },
  'Material UI': { icon: MaterialUIIcon, link: 'https://material-ui.com/' },
  MySQL: { icon: MySQLIcon, link: 'https://www.mysql.com/' },
  PostgreSQL: { icon: PostgreSQLIcon, link: 'https://www.postgresql.org/' },
  MongoDB: { icon: MongoDBIcon, link: 'https://www.mongodb.com/' },
  HTML5: { icon: HTML5Icon, link: 'https://en.wikipedia.org/wiki/HTML5' },
  CSS3: {
    icon: CSS3Icon,
    link: 'https://en.wikipedia.org/wiki/Cascading_Style_Sheets',
  },
  Sass: { icon: SassIcon, link: 'https://sass-lang.com/' },
  Bootstrap: { icon: BootstrapIcon, link: 'https://getbootstrap.com/' },
  JQuery: { icon: JQueryIcon, link: 'https://jquery.com/' },
  GraphQL: { icon: GraphQLIcon, link: 'https://graphql.org/' },
  AWS: { icon: AwsIcon, link: 'https://aws.amazon.com/' },
  Azure: { icon: AzureIcon, link: 'https://azure.microsoft.com/en-us/' },
  Firebase: { icon: FirebaseIcon, link: 'https://firebase.google.com/' },
  Docker: { icon: DockerIcon, link: 'https://www.docker.com/' },
  Kubernetes: { icon: KubernetesIcon, link: 'https://kubernetes.io/' },
  MATLAB: {
    icon: MatlabIcon,
    link: 'https://www.mathworks.com/products/matlab.html',
    excludeInList: true,
  },
  'Excel VBA': {
    icon: ExcelIcon,
    link: 'https://en.wikipedia.org/wiki/Visual_Basic_for_Applications',
    excludeInList: true,
  },
}

export default technologyIcons
