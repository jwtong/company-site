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
import FirebaseIcon from '../assets/svg/devicon-custom/firebase-original.svg'
import JavaIcon from '../assets/svg/devicon-master/icons/java/java-original.svg'
import HTML5Icon from '../assets/svg/devicon-master/icons/html5/html5-original.svg'
import CSS3Icon from '../assets/svg/devicon-master/icons/css3/css3-original.svg'
import SassIcon from '../assets/svg/devicon-master/icons/sass/sass-original.svg'
import BootstrapIcon from '../assets/svg/devicon-master/icons/bootstrap/bootstrap-plain.svg'
import GatsbyIcon from '../assets/svg/devicon-custom/gatsby-original.svg'
import GraphQLIcon from '../assets/svg/devicon-custom/graphql-original.svg'
import AzureIcon from '../assets/svg/devicon-custom/azure-original.svg'
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
// import VuetifyIcon from '..assets/svg/devicon-custom/vuetify.svg'
//netlify
//github
//markdown
//npm
//ios
//t-sql / sql server
//redis

interface Technology {
  name: string
  icon: string
  link: string
  excludeFromList?: boolean
}

const technologies: Array<Technology> = [
  {
    name: 'JavaScript',
    icon: JavascriptIcon,
    link: 'https://www.javascript.com/',
  },
  {
    name: 'Typescript',
    icon: TypescriptIcon,
    link: 'https://www.typescriptlang.org',
  },
  { name: 'Vue', icon: VueIcon, link: 'https://vuejs.org/' },
  { name: 'React', icon: ReactIcon, link: 'https://reactjs.org/' },
  { name: 'Gatsby', icon: GatsbyIcon, link: 'https://www.gatsbyjs.org/' },
  {
    name: 'React Native',
    icon: ReactNativeIcon,
    link: 'https://facebook.github.io/react-native/',
  },
  { name: 'Node', icon: NodeIcon, link: 'https://nodejs.org/en/' },

  {
    name: 'Swift',
    icon: SwiftIcon,
    link: 'https://developer.apple.com/swift/',
  },
  {
    name: 'Java',
    icon: JavaIcon,
    link: 'https://en.wikipedia.org/wiki/Java_(programming_language)',
  },

  {
    name: 'C#',
    icon: CSharpIcon,
    link: 'https://en.wikipedia.org/wiki/C_Sharp_(programming_language)',
  },
  { name: 'Ruby', icon: RubyIcon, link: 'https://www.ruby-lang.org/en/' },
  { name: 'Rails', icon: RailsIcon, link: 'https://rubyonrails.org/' },

  {
    name: '.NET',
    icon: DotNetIcon,
    link: 'https://dotnet.microsoft.com/',
  },

  {
    name: 'Objective-C',
    icon: AppleIcon,
    link: 'https://en.wikipedia.org/wiki/Objective-C',
  },

  { name: 'Python', icon: PythonIcon, link: 'https://www.python.org/' },
  {
    name: 'SciKit',
    icon: SciKitIcon,
    link: 'https://scikit-learn.org/stable/',
  },

  {
    name: 'Material UI',
    icon: MaterialUIIcon,
    link: 'https://material-ui.com/',
  },
  // {
  //   name: 'Vuetify',
  //   icon: VuetifyIcon,
  //   link: 'https://vuetifyjs.com/en/',
  // },
  { name: 'Bootstrap', icon: BootstrapIcon, link: 'https://getbootstrap.com/' },

  { name: 'MySQL', icon: MySQLIcon, link: 'https://www.mysql.com/' },
  {
    name: 'PostgreSQL',
    icon: PostgreSQLIcon,
    link: 'https://www.postgresql.org/',
  },
  { name: 'MongoDB', icon: MongoDBIcon, link: 'https://www.mongodb.com/' },
  { name: 'GraphQL', icon: GraphQLIcon, link: 'https://graphql.org/' },

  {
    name: 'HTML5',
    icon: HTML5Icon,
    link: 'https://en.wikipedia.org/wiki/HTML5',
  },
  {
    name: 'CSS3',
    icon: CSS3Icon,
    link: 'https://en.wikipedia.org/wiki/Cascading_Style_Sheets',
  },
  { name: 'Sass', icon: SassIcon, link: 'https://sass-lang.com/' },

  { name: 'Sketch', icon: SketchIcon, link: 'https://www.sketch.com/' },
  { name: 'Balsamiq', icon: BalsamiqIcon, link: 'https://balsamiq.com/' },

  { name: 'AWS', icon: AwsIcon, link: 'https://aws.amazon.com/' },
  {
    name: 'Azure',
    icon: AzureIcon,
    link: 'https://azure.microsoft.com/en-us/',
  },
  {
    name: 'Firebase',
    icon: FirebaseIcon,
    link: 'https://firebase.google.com/',
  },

  { name: 'Docker', icon: DockerIcon, link: 'https://www.docker.com/' },
  { name: 'Kubernetes', icon: KubernetesIcon, link: 'https://kubernetes.io/' },

  {
    name: 'Android',
    icon: AndroidIcon,
    link: 'https://developer.android.com/',
  },

  {
    name: 'MATLAB',
    icon: MatlabIcon,
    link: 'https://www.mathworks.com/products/matlab.html',
    excludeFromList: true,
  },
  {
    name: 'Excel VBA',
    icon: ExcelIcon,
    link: 'https://en.wikipedia.org/wiki/Visual_Basic_for_Applications',
    excludeFromList: true,
  },
]

export default technologies
