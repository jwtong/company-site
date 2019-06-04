import Code from "@material-ui/icons/Code";
import InsertChartOutlined from "@material-ui/icons/InsertChartOutlined";
import PaletteOutlined from "@material-ui/icons/PaletteOutlined";
import BusinessCenterOutlined from "@material-ui/icons/BusinessCenterOutlined";
import AssignmentOutlined from "@material-ui/icons/AssignmentOutlined";

const roles = [
  {
    title: "Software Developer",
    text:
      "Specializing in progressive web and mobile applications, our responsibility under this role is to write code in accordance to the project specifications, then configure the hosting platform to serve the website or application live. This role may also include a discussion and recommendation of the right front-end/back-end languages and hosting platform to use.",
    icon: Code
  },
  {
    title: "UI/UX Designer",
    text:
      "If you're not sure how you want your application to look and how you want people to interact with it, we can help apply user-interface best practices and sketch out a visual representation of the application. Note, this does not include branding design such as logos or visual content that may be served up by your application.",
    icon: PaletteOutlined
  },
  {
    title: "Product Manager",
    text:
      "If you have limited knowledge about software, we can take a greater function in making architectural and design choices as related to the code. This primarily means spec'ing features, i.e. translating broader business logic into implementable, scoped tasks. Additionally, we are happy to provide much more feedback and advice in more of a consultant role.",
    icon: AssignmentOutlined
  },
  {
    title: "Business Logic Analyst",
    text:
      "If you just have an idea, we can help you all the way from the bottom-up, suggesting business logic decisions that may pair well with a software implementation. Our focus in this role would be to think critically of the economic and social impacts of the core idea.",
    icon: BusinessCenterOutlined
  },
  {
    title: "Data Analyst",
    text:
      "Parallel to the software development, we can apply data analytic and machine learning principles to provide valuable insights into the efficacy of your application as it relates to your economic or social imperatives.",
    icon: InsertChartOutlined
  }
];

export default roles;
