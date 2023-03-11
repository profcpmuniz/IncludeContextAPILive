import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { MyContextProvider } from "../context/MyContext.jsx";
import LoginPage  from "../views/LoginPage.jsx";

//create your first component
const Home = () => {
	return (
			<MyContextProvider>
				<LoginPage />
			</MyContextProvider>
				
  			

	);
};

export default Home;
