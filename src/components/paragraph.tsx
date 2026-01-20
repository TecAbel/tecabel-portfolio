import { FC } from 'react'

export const RenderParagraph: FC<string> = value => {
  return <p dangerouslySetInnerHTML={{ __html: value }}></p>
}
