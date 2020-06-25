import * as materialIcons from '@material-ui/icons'
import { Props as ServiceCardProps } from '../components/ServiceCard'

const services: ServiceCardProps[] = [
  {
    title: 'Software Development',
    text:
      'We specialize in building progressive web and mobile applications. We will design an architecture to scale, then apply software engineering best practices to scaffold the code. Lastly, we will configure the hosting platform to serve the website or application live. Unless requested otherwise, we will select leading technologies to use in your project, making the codebase easy to inherit and build upon.',
    icon: materialIcons.Code,
    color: '',
  },
  {
    title: 'Product Management',
    text:
      "If you have limited knowledge of software, we can assist in making architectural and design choices as related to the code. This primarily means spec'ing features, translating broader business logic into implementable scoped tasks. We are happy to provide feedback and advice in more of a consulting role.",
    icon: materialIcons.AssignmentOutlined,
    color: '#ee5d8e',
  },
  {
    title: 'UI/UX Design',
    text:
      "If you're not sure how you want your application to look or how you want people to interact with it, we can help apply user-interface principles and sketch out a visual representation of the application.",
    icon: materialIcons.PaletteOutlined,
    color: '#f4a0bc',
  },
]

export default services
