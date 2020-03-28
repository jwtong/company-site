import ReactIcon from '../assets/devicon-master/icons/react/react-original.svg'
import NodeIcon from '../assets/devicon-master/icons/nodejs/nodejs-original.svg'
import BalsamiqIcon from '../assets/icons/balsamiq-original.svg'
import SketchIcon from '../assets/devicon-master/icons/sketch/sketch-original.svg'
import AwsIcon from '../assets/devicon-master/icons/amazonwebservices/amazonwebservices-original.svg'
import MySQLIcon from '../assets/devicon-master/icons/mysql/mysql-original.svg'
import PostgreSQLIcon from '../assets/devicon-master/icons/postgresql/postgresql-original.svg'
import MongoDBIcon from '../assets/devicon-master/icons/mongodb/mongodb-original.svg'
import PythonIcon from '../assets/devicon-master/icons/python/python-original.svg'
import RubyIcon from '../assets/devicon-master/icons/ruby/ruby-original.svg'
import RailsIcon from '../assets/devicon-master/icons/rails/rails-plain.svg'
import SwiftIcon from '../assets/devicon-master/icons/swift/swift-original.svg'
import AppleIcon from '../assets/devicon-master/icons/apple/apple-original.svg'
import VueIcon from '../assets/devicon-master/icons/vuejs/vuejs-original.svg'
import TypescriptIcon from '../assets/devicon-master/icons/typescript/typescript-original.svg'
import Es6Icon from '../assets/icons/es6-original.svg'
import FirebaseIcon from '../assets/icons/firebase-original.svg'
import JavaIcon from '../assets/devicon-master/icons/java/java-original.svg'
import HTML5Icon from '../assets/devicon-master/icons/html5/html5-original.svg'
import CSS3Icon from '../assets/devicon-master/icons/css3/css3-original.svg'
import SassIcon from '../assets/devicon-master/icons/sass/sass-original.svg'
import BootstrapIcon from '../assets/devicon-master/icons/bootstrap/bootstrap-plain.svg'
import GatsbyIcon from '../assets/icons/gatsby-original.svg'
import GraphQLIcon from '../assets/icons/graphql-original.svg'
import AzureIcon from '../assets/icons/azure-original.svg'
import JQueryIcon from '../assets/devicon-master/icons/jquery/jquery-original.svg'
import KubernetesIcon from '../assets/icons/kubernetes-original.svg'
import DockerIcon from '../assets/devicon-master/icons/docker/docker-original.svg'
import CSharpIcon from '../assets/devicon-master/icons/csharp/csharp-original.svg'
import AndroidIcon from '../assets/devicon-master/icons/android/android-original.svg'
import SciKitIcon from '../assets/icons/scikit-original.svg'
import MaterialUIIcon from '../assets/icons/materialui-original.svg'
import JavascriptIcon from '../assets/devicon-master/icons/javascript/javascript-original.svg'
import ReactNativeIcon from '../assets/icons/reactnative-original.svg'
import DotNetIcon from '../assets/icons/dotnet-original.svg'
import MatlabIcon from '../assets/icons/matlab-original.svg'
import ExcelIcon from '../assets/icons/excel-original.svg'

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
