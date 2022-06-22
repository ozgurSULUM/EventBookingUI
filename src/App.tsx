import * as React from "react"
import {
  ChakraProvider,
  Box,
  theme
} from "@chakra-ui/react"

import { QueryClient, QueryClientProvider } from 'react-query'
import { Outlet } from 'react-router-dom';
import SiteHeader from './components/SiteHeader';

const queryClient = new QueryClient();

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={theme}>
      <Box height='100vh'>
        <SiteHeader headerText='EventHub' />
        <Outlet />
      </Box>
    </ChakraProvider>
  </QueryClientProvider>
)
