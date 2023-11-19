import CheckList from "@editorjs/checklist";
import Code from "@editorjs/code";
import Delimiter from "@editorjs/delimiter";
import Embed from "@editorjs/embed";
import Image from "@editorjs/image";
import InlineCode from "@editorjs/inline-code";
import Link from "@editorjs/link";
import List from "@editorjs/list";
import Quote from "@editorjs/quote";
import SimpleImage from "@editorjs/simple-image";
import Paragraph from "@editorjs/paragraph";
import Header from "@editorjs/header"

export const EDITOR_TOOLS = {
  code: Code,
  header: {
      class: Header,
      config: {
        placeholder: 'Enter a Header',
        levels: [2, 3, 4],
        defaultLevel: 2
    }
  },
  paragraph: Paragraph,
  checklist: {
    class: CheckList,
    config:{
        "type" : "checklist",
        "data" : {
            "items" : [
                {
                  "text" : "This is a block-styled editor",
                  "checked" : true
                },
                {
                  "text" : "Clean output data",
                  "checked" : false
                },
                {
                  "text" : "Simple and powerful API",
                  "checked" : true
                }
            ]
        }
    }
  },
  embed: Embed,
  image: Image,
  inlineCode: InlineCode,
  link: Link,
  list: List,
  quote: Quote,
  simpleImage: SimpleImage,
  delimiter: Delimiter
};