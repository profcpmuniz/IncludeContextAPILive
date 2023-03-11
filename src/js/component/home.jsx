import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { MyContextProvider } from "../context/MyContext.jsx";
import LoginPage  from "../views/LoginPage.jsx";
import { WelcomePage } from "../views/WelcomePage.jsx";
import { WithParam } from "../views/WithParam.jsx";

//create your first component
const Home = () => {
	return (
			<MyContextProvider>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<LoginPage />} />
						<Route path="/welcome" element={<WelcomePage />} />
						<Route path="/withparam/:id" element={<WithParam />} />
					</Routes>
					
				</BrowserRouter>
				
			</MyContextProvider>
				
  			

	);
};

export default Home;
