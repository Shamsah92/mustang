import React from "react";
import { Head, Description } from "../styles";
import { Link } from "react-router-dom";

const handlemustang = () =>
    alert(
        "Welcome, dear visitor, we hope that you get useful information in our site "
    );

const Home = (props) => {


    return (

        <>
            <Head>
                <img
                    src="https://www7.0zz0.com/2020/07/10/15/270298198.jpg"
                    alt="Logo"
                />
                <p></p>
                <button onClick={handlemustang}>Welcome Massage </button>
            </Head>
            <Description>      <Link to="/mustang" style={{ color: "red" }}>
                Mustang List
      </Link></Description>

        </>

    );


}
export default Home;