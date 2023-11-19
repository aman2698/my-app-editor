// const editorJsHtml = require("editorjs-html");
// const EditorJsToHtml = editorJsHtml();

// export default function PreviewRenderer ({ data }) {
//   const html = EditorJsToHtml.parse(data)
//   console.log(html);
//   return (
//     <div className="prose max-w-full" key={data.time}>
//       {html.map((item, index) => {
//         if (typeof item === "string") {
//           return (
//             <div dangerouslySetInnerHTML={{ __html: item }} key={index}></div>
//           );
//         }
//         return item;
//       })}
//     </div>
//   );
// };

import edjsHTML from "editorjs-html";
// this function parses strings (html elements) to html
import parse from "html-react-parser";
const edjsParser = edjsHTML({checklist: customParser});

export default function PreviewRenderer({ data }) {
  // array of html elements
  console.log(data);
  const html = edjsParser.parse(data);

  return <div className="prose max-w-full"><div>{parse(html.join(""))}</div></div>;
}

function customParser({data}){
    return `<div> <input type='checkbox' value=${data.items[0].checked} /> ${data.items[0].text} </div>`;
  }