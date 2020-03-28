import Code from '@material-ui/icons/Code'
import InsertChartOutlined from '@material-ui/icons/InsertChartOutlined'
import PaletteOutlined from '@material-ui/icons/PaletteOutlined'
// import BusinessCenterOutlined from "@material-ui/icons/BusinessCenterOutlined";
import AssignmentOutlined from '@material-ui/icons/AssignmentOutlined'

const roles = [
  {
    title: 'Software Development',
    text:
      'We specialize in building progressive web and mobile applications. We will design an architecture to scale, then apply software engineering best practices to scaffold the code. Lastly, we will configure the hosting platform to serve the website or application live. Unless requested otherwise, we will select leading technologies to use in your project, making the codebase easy to inherit and build upon.',
    icon: Code,
  },
  {
    title: 'UI/UX Design',
    text:
      "If you're not sure how you want your application to look and how you want people to interact with it, we can help apply user-interface principles and sketch out a visual representation of the application. Note, this does not include branding design such as logos or visual content that may be served up by your application.",
    icon: PaletteOutlined,
  },
  {
    title: 'Product Management',
    text:
      "If you have limited knowledge about software, we can take a greater function in making architectural and design choices as related to the code. This primarily means spec'ing features, i.e. translating broader business logic into implementable, scoped tasks. Additionally, we are happy to provide much more feedback and advice in more of a consultant role.",
    icon: AssignmentOutlined,
  },
  // {
  //   title: "Business Logic Analysis",
  //   text:
  //     "If you just have an idea, we can help you all the way from the bottom-up, suggesting business decisions that may pair well with a software implementation. The focus of this role is to think critically of the economic and social impacts of the core idea.",
  //   icon: BusinessCenterOutlined
  // },
  {
    title: 'Data Analysis',
    text:
      'In conjunction with software development, we can apply data analysis and machine learning methods to provide valuable insights into your application as it relates to your economic or social imperatives.',
    icon: InsertChartOutlined,
  },
]

export default roles
