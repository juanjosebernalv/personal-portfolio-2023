import BlockContent from '@sanity/block-content-to-react';
import { HighlightCode } from './HighlightCode';
import { urlFor } from 'lib/api';

const serializer = {
  types: {
    code: ( { node: {language, code, filename}} ) => {
      return (
        <HighlightCode language={[language]}>
          {code}
          <div className="code-filename">{ filename }</div>
        </HighlightCode>
      )
    },
    image: ({ node: { asset, alt, position = 'center' }}) => {

      return (
        <div className={`blog-image blog-image-${position}`}>
          <img src={urlFor(asset).height(300).fit('max').url()} alt="alt" />
          <div className="image-alt">{alt}</div>
        </div>
      )
    }
  }
}


export const BlogContent = ({content}) => {
  return <BlockContent imageOptions={{w: 320, h: 240, fit: 'max'}} serializers={serializer} blocks={content} />
}
