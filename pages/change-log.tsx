import {
    Text,
    Button,
  } from '@chakra-ui/react'
  import * as React from 'react'
  import PageContainer from 'components/page-container'
  import Sidebar from 'components/sidebar/sidebar'
  import { getRoutes } from 'layouts/mdx'
  
  function Resources() {
    /**
     * Re-use the docs sidebar so it's easier for a visitors
     * to reference components mentioned in the resource blog/video.
     */
    const routes = getRoutes('/docs/')
  
    return (
      <PageContainer
        sidebar={<Sidebar routes={routes} />}
        frontmatter={{
          title: ('Changelog'),
          description: ('A list of tutorials created by open source contributors'),
        }}
      >
        <Text mt='2'>{'A list of recent changes made to the website.'}</Text>

        <Button data-canny-changelog mt="4">Click to view the Changelog</Button>
      </PageContainer>
    )
  }
  
  export default Resources