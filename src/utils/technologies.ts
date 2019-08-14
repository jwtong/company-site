const technologyColorMap: any = {
  "React / React Native": "#05a5d1",
  React: "#05a5d1",
  "React Native": "#05a5d1",
  "C / C++": "#649CD3",
  "Python (SciKit-Learn)": "#1F415F",
  "Google Firebase": "#FFCB2B",
  AWS: "#FfcA02",
  Sketch: "#fa6400",
  "Objective-C / Swift": "#ED523F",
  Java: "#EC2025",
  "Java (Spark)": "#EC2025",
  "Javascript / JQuery": "#1B74BC",
  "Ruby on Rails": "#cc0000",
  Balsamiq: "#A60001",
  SQL: "#0078D6",
  MySQL: "#0078D6",
  NoSQL: "#439B44",
  MATLAB: "#0076A8",
  "C#": "#953DAC",
  "Excel VBA": "#1F7245",
  Android: "#A4C639",
  Vue: "#41b883"
};

export function ColorLuminance(hex: any, lum: number = 0) {
  // validate hex string
  let hexNew = String(hex).replace(/[^0-9a-f]/gi, "");
  if (hexNew.length < 6) {
    hexNew =
      hexNew[0] + hexNew[0] + hexNew[1] + hexNew[1] + hexNew[2] + hexNew[2];
  }
  // convert to decimal and change luminosity
  let rgb = "#";
  let c;
  for (let i = 0; i < 3; i += 1) {
    c = parseInt(hexNew.substr(i * 2, 2), 16);
    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
    rgb += `00${c}`.substr(c.length);
  }

  return rgb;
}

export default technologyColorMap;
