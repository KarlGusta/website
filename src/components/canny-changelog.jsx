import {
  Icon,
  Link,
} from '@chakra-ui/react'
import React, { useEffect } from 'react';
import { FaNewspaper } from 'react-icons/fa'

/* eslint-disable no-undef */ 

const Changelog = () => {
  useEffect(() => {
    !function(w,d,i,s){function l(){if(!d.getElementById(i)){var f=d.getElementsByTagName(s)[0],e=d.createElement(s);e.type="text/javascript",e.async=!0,e.src="https://canny.io/sdk.js",f.parentNode.insertBefore(e,f)}}if("function"!=typeof w.Canny){var c=function(){c.q.push(arguments)};c.q=[],w.Canny=c,"complete"===d.readyState?l():w.attachEvent?w.attachEvent("onload",l):w.addEventListener("load",l,!1)}}(window,document,"canny-jssdk","script");

        Canny('initChangelog', {
          appID: '62273043f8c8016d93c590d7',
          position: 'bottom',
          align: 'left',
        });
  });

  return (
    <Link
    isExternal
    aria-label='Go to Chakra UI GitHub page'
    data-canny-changelog
  >
    <Icon
      as={FaNewspaper}
      data-canny-changelog
      display='block'
      transition='color 0.2s'
      w='5'
      h='5'
      _hover={{ color: 'gray.600' }}
    />
  </Link>
  );
}

/* eslint-enable no-undef */

export default Changelog;
