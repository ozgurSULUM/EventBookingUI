import * as React from "react"
import {
  ChakraProvider,
  Box,
  theme
} from "@chakra-ui/react"
import { Outlet } from 'react-router-dom';

import SiteHeader from './components/SiteHeader';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box height='100vh'>
      <SiteHeader headerText='Event Booking' />
      <Outlet />
    </Box>
  </ChakraProvider>
)
