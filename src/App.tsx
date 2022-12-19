// //inject store at the top level of our React app using Provider component

// import { ChakraProvider, Container, Heading } from "@chakra-ui/react";
// import React from "react";
// import { Provider } from "react-redux";
// import store from "./store";
// import CanvasBoard from "./components/CanvasBoard";
// import ScoreCard from "./components/ScoreCard";

// const App = () =>{
//     return(
//         <Provider store={store}>
//             <ChakraProvider>
//                 <Container maxW="container.lg" centerContent>
//                     <Heading as = "h1" size = "xl">SNAKE GAME</Heading>
//                     <ScoreCard/>
//                     //Children components
//                     //Canvasboard component added
//                     <CanvasBoard height={600} width={1000}/>
//                 </Container>
//             </ChakraProvider>
//         </Provider>
//     );
// };

// export default App;




import { ChakraProvider, Container, Heading } from "@chakra-ui/react";
import React from "react";
import { Provider } from "react-redux";
import CanvasBoard from "./components/CanvasBoard";
import ScoreCard from "./components/ScoreCard";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Container maxW="container.xl" centerContent>
          <Heading marginTop={10} as="h1" size="xl" color="green">SNAKE GAME</Heading>
          <ScoreCard />
          <CanvasBoard height={600} width={1000} />
        </Container>
      </ChakraProvider>
    </Provider>
  );
};

export default App;
